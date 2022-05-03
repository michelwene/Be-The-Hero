import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { MdOutlineExitToApp } from "react-icons/md";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/input";
import { api } from "../services/client/api";
import Router from "next/router";
import { authService } from "../services/useCases/AuthService";

interface FormUserLogin {
  email?: string;
  password?: string;
}

const CreateUserFormSchema = yup.object({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .typeError("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .max(20, "A senha deve ter no máximo 20 caracteres"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  });

  async function handleSubmitForm(data: FormUserLogin) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      await authService.signIn(data);

      Router.push("/cases");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Flex
        as="section"
        minWidth="max-content"
        mx="auto"
        height="100vh"
        align="center"
        justify="center"
        gap="150px"
      >
        <Box>
          <Logo />
          <VStack spacing={5} mt="110px" alignItems="flex-start" width="351px">
            <Heading as="h1" size="lg" fontWeight={500} fontSize="36px">
              Faça seu logon
            </Heading>
            <Box
              as="form"
              width="100%"
              onSubmit={handleSubmit(handleSubmitForm)}
            >
              <VStack alignItems="flex-start">
                <SimpleGrid width="100%" spacing={4}>
                  <Input
                    type="email"
                    bg="white"
                    focusBorderColor="red.500"
                    placeholder="Digite seu e-mail"
                    size="lg"
                    {...register("email")}
                    error={errors.email}
                  />
                  <Input
                    type="password"
                    bg="white"
                    focusBorderColor="red.500"
                    placeholder="Digte sua senha"
                    size="lg"
                    {...register("password")}
                    error={errors.password}
                  />
                  <Button
                    type="submit"
                    colorScheme="red"
                    width="100%"
                    size="lg"
                    loadingText="Entrando"
                    maxWidth="351px"
                    isLoading={isSubmitting}
                  >
                    Entrar
                  </Button>
                </SimpleGrid>
              </VStack>
            </Box>
            <Link href="/createUser" passHref>
              <Button
                leftIcon={<MdOutlineExitToApp color="red" />}
                variant="link"
                colorScheme="gray.1000"
                alignSelf="flex-start"
              >
                Não tenho cadastro
              </Button>
            </Link>
          </VStack>
        </Box>
        <Box>
          <Image src="/Pessoas.svg" objectFit="cover" alt="pessoas" />
        </Box>
      </Flex>
    </>
  );
}
