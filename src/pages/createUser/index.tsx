import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/input";
import NextLink from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { useEffect } from "react";
import { normalizePhoneNumber } from "../../utils/masks";

type createUserFormData = {
  name: string;
  email: string;
  phone: number;
  city: string;
  uf: string;
};

const CreateUserFormSchema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .typeError("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  phone: yup
    .string()
    .required("O whatsapp é obrigatório")
    .min(10, "Insira um número válido"),
  city: yup.string().required("A cidade é obrigatória"),
  uf: yup
    .string()
    .required("O estado é obrigatório")
    .length(2, "Digite o estado com 2 letras"),
});

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  });

  const handleSubmitForm: SubmitHandler<Partial<createUserFormData>> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  return (
    <>
      <Flex
        as="section"
        minHeight="100vh"
        align="center"
        justifyContent="center"
      >
        <Flex
          minHeight="577px"
          boxShadow="2xl"
          borderRadius="8px"
          align="center"
          justifyContent="center"
          columnGap="96px"
          px="96px"
        >
          <VStack align="flex-start" maxWidth="384px">
            <Logo width="191px" height="81px" />
            <Box pt="64px" pb="84">
              <Heading
                as="h1"
                size="lg"
                fontWeight={500}
                fontSize="36px"
                pb="32px"
                color="gray.1000"
              >
                Cadastro
              </Heading>
              <Text lineHeight="32px" fontSize="1.125rem" color="gray.500">
                Faça seu cadastro, entre na plataforma e ajude pessoas a
                encontrarem os casos da sua ONG.
              </Text>
            </Box>
            <NextLink href="/" passHref>
              <Button
                leftIcon={<BiLeftArrowAlt color="red" fontSize="1.5rem" />}
                variant="link"
                color="gray.1000"
              >
                Voltar para o logon
              </Button>
            </NextLink>
          </VStack>

          <Box
            as="form"
            flex="1"
            maxWidth="448px"
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <VStack>
              <SimpleGrid
                minChildWidth="240px"
                spacing={["2", "4"]}
                width="100%"
              >
                <Input
                  placeholder="Nome da ONG"
                  {...register("name")}
                  error={errors.name}
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                  error={errors.email}
                />
                <Input
                  type="tel"
                  placeholder="Whatsapp"
                  {...register("phone")}
                  error={errors.phone}
                />
                <Flex gap="8px">
                  <Input
                    placeholder="Cidade"
                    {...register("city")}
                    error={errors.city}
                  />
                  <Input
                    placeholder="UF"
                    _placeholder={{
                      textAlign: "center",
                    }}
                    {...register("uf")}
                    error={errors.uf}
                  />
                </Flex>
              </SimpleGrid>
            </VStack>
            <Flex mt="4">
              <HStack width="100%">
                <Button
                  type="submit"
                  flex="1"
                  colorScheme="red"
                  isLoading={isSubmitting}
                  loadingText="Cadastrando"
                  size="lg"
                >
                  Cadastrar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
