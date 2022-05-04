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
import { useForm } from "react-hook-form";
import { Input } from "../components/Form/input";
import Router from "next/router";
import { authService } from "../services/useCases/AuthService";
import { useState } from "react";
import { InputError } from "../components/InputError";

interface FormUserLogin {
  email?: string;
  password?: string;
}

const CreateUserFormSchema = yup.object({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .max(20, "A senha deve ter no máximo 20 caracteres"),
});

export default function Home() {
  const [errorRequest, setErrorRequest] = useState<null | string>(null);

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
      setErrorRequest(err.message);
      setTimeout(() => {
        setErrorRequest(null);
      }, 3000);
    } finally {
    }
  }
  return (
    <Flex
      as="section"
      minWidth={["100vw", "max-content"]}
      mx={["auto", "0"]}
      my={["20px", "0"]}
      minHeight="100vh"
      height="100%"
      overflow={["scroll"]}
      flexDirection={["column", "column", "column", "column", "row"]}
      align="center"
      justify="center"
      gap={["50px", "70px", "80px", "90px"]}
    >
      <Box>
        <Logo width={["50%", "100%"]} />
        <VStack
          spacing={5}
          mt={["50px", "70px", "110px"]}
          alignItems="flex-start"
          width={["88vw", "351px"]}
        >
          <Heading as="h1" size="lg" fontWeight={500} fontSize="36px">
            Faça seu logon
          </Heading>
          <Box
            as="form"
            width={["88vw", "100%"]}
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
                {errorRequest && (
                  <InputError>E-mail e/ou senha incorretos</InputError>
                )}
                <Button
                  type="submit"
                  colorScheme="red"
                  width="100%"
                  size="lg"
                  loadingText="Entrando"
                  maxWidth={["none", "351px"]}
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
      <Image src="/Pessoas.svg" objectFit="cover" alt="pessoas" height="50%" />
    </Flex>
  );
}
