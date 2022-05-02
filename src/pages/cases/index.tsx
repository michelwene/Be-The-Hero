import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Logo } from "../../components/Logo";
import { api } from "../../services/api";

type Case = {
  title: string;
  description: string;
  value: number;
};

export default function Cases() {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    api.get("/cases").then((response) => {
      try {
        setCases(response.data);
      } catch (err) {
        console.log("Erro ao carregar os casos", err);
      }
    });
  }, []);

  console.log(cases);
  return (
    <Box as="section" maxWidth="78vw" mx="auto">
      <Heading
        as="header"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="24px"
      >
        <Flex columnGap="48px" align="center">
          <Logo width="164px" height="63px" />
          <Text fontSize="md" fontWeight={400} lineHeight="18px">
            Bem vindo(a), APAD
          </Text>
        </Flex>
        <Flex columnGap="24px">
          <NextLink href="/cases/createCases" passHref>
            <Button colorScheme="red" px="48px" py="21px">
              Cadastrar novo caso
            </Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button bg="initial" borderColor="gray.100" border="1px">
              <AiOutlinePoweroff color="red" />
            </Button>
          </NextLink>
        </Flex>
      </Heading>
      <Box pb="30px" mt="80px" maxWidth="1120px" mx="auto">
        <Heading as="h1" fontWeight={500} fontSize="36px">
          Casos cadastrados
        </Heading>
      </Box>
      <Flex
        mx="auto"
        gap="32px"
        wrap="wrap"
        justifyContent="space-between"
        maxWidth="1120px"
      >
        {cases.map((data) => (
          <>
            <Flex
              flexDirection="column"
              bg="white"
              width="543px"
              maxWidth="543px"
              padding="32px"
              borderRadius="8px"
              rowGap="32px"
            >
              <Box>
                <Heading
                  as="h2"
                  fontSize="xs"
                  fontWeight={700}
                  color="gray.600"
                  display="flex"
                  justifyContent="space-between"
                >
                  CASO:
                  <RiDeleteBin6Line
                    fontSize="20px"
                    color="gray"
                    cursor="pointer"
                  />
                </Heading>
                <Text fontSize="md" fontWeight={400} color="gray.500">
                  {data.title}
                </Text>
              </Box>
              <Box>
                <Heading
                  as="h3"
                  fontSize="xs"
                  fontWeight={700}
                  color="gray.600"
                >
                  Descrição:
                </Heading>
                <Text fontSize="md" fontWeight={400} color="gray.500">
                  {data.description}
                </Text>
              </Box>
              <Box>
                <Heading
                  as="h4"
                  fontSize="xs"
                  fontWeight={700}
                  color="gray.600"
                >
                  Valor:
                </Heading>
                <Text fontSize="md" fontWeight={400} color="gray.500">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(data.value)}
                </Text>
              </Box>
            </Flex>
          </>
        ))}
      </Flex>
    </Box>
  );
}
