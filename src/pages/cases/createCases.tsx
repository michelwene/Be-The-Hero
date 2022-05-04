import { Flex, Heading, Text, Textarea, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/Form/input";
import { api } from "../../services/client/api";
import { useEffect } from "react";
import { currencyMask } from "../../utils/masks";

type CreateCaseFormData = {
  title: string;
  description: string;
  value: string;
};

const createCaseSchema = yup.object({
  title: yup.string().required("O título é obrigatório"),
  description: yup.string().required("A descrição é obrigatória"),
  value: yup.string().required("O valor é obrigatório"),
});

export default function CreateCases() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(createCaseSchema),
  });

  const handleCreateCase: SubmitHandler<Partial<CreateCaseFormData>> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      api.post("/cases", values);
      reset();
    } catch (err) {
      console.log("Erro ao cadastrar caso", err);
    }
  };

  const valueCurrency = watch("value");

  useEffect(() => {
    setValue("value", currencyMask(valueCurrency));
  }, [valueCurrency]);

  return (
    <Flex as="section" minHeight="100vh" align="center" justify="center">
      <Flex
        borderRadius="8px"
        boxShadow={["0", "2xl"]}
        columnGap="148px"
        justifyContent="space-between"
        flexDirection={["column", "column", "column", "row"]}
        minHeight="577px"
        mx="auto"
        my="auto"
        px={["0", "96px"]}
        width={["90vw", "78vw"]}
      >
        <Flex
          flexDirection="column"
          maxHeight="381px"
          maxWidth="332px"
          py="94px"
        >
          <Logo width={["191px"]} height="80px" />
          <Heading as="h1" mt="64px" mb="32px">
            Cadastrar novo caso
          </Heading>
          <Text fontSize="1.125rem" lineHeight="32px" color="gray.500">
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </Text>

          <NextLink href="/cases" passHref>
            <Button
              alignSelf="flex-start"
              color="gray.1000"
              mt={["10px", "15px", "20px", "25px", "50px"]}
              leftIcon={<BiLeftArrowAlt color="red" fontSize="1.5rem" />}
              variant="link"
            >
              Voltar para a home
            </Button>
          </NextLink>
        </Flex>
        <VStack
          as="form"
          py="94px"
          flex="1"
          maxWidth="448px"
          onSubmit={handleSubmit(handleCreateCase)}
        >
          <Input
            placeholder="Título do caso"
            bg="white"
            height="60px"
            {...register("title")}
            error={errors.title}
          />
          <Textarea
            placeholder="Descrição"
            height="176px"
            bg="white"
            {...register("description")}
          />

          <Input
            placeholder="Valor em reais"
            bg="white"
            height="60px"
            {...register("value")}
            error={errors.value}
          />
          <Flex width="100%" columnGap="17px">
            <NextLink href="/cases" passHref>
              <Button flex="1" height="60px" variant="outline" border="2px">
                Cancelar
              </Button>
            </NextLink>
            <Button
              type="submit"
              colorScheme="red"
              flex="2"
              height="60px"
              loadingText="Cadastrando..."
              isLoading={isSubmitting}
            >
              Cadastrar
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
}
