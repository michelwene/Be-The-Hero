import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Logo } from "../../components/Logo";
import { api, removeAuthentication } from "../../services/client/api";
import { IUserData } from "../../types/auth";
import { handleDestroyCookies } from "../../utils/destroyCookie";
import { handleRecoverUserDataFromCookies } from "../../utils/recoverUserDataFromCookie";

type Case = {
  id: string;
  title: string;
  description: string;
  value: string;
};

export default function Cases() {
  const [cases, setCases] = useState<Case[]>([]);
  const userData = handleRecoverUserDataFromCookies();

  useEffect(() => {
    api.get("/cases").then((response) => {
      try {
        setCases(response.data);
      } catch (err) {
        console.log("Erro ao carregar os casos", err);
      }
    });
  }, []);

  const handleDeleteCase = async (id: string) => {
    await api.delete(`/cases/${id}`);
    setCases(cases.filter((caseItem) => caseItem.id !== id));
  };

  async function handleSignOut() {
    try {
      await handleDestroyCookies("userData");
      await handleDestroyCookies("accessToken");

      removeAuthentication();

      Router.push("/");
    } catch (err) {
      alert("erro");
    }
  }

  return (
    <Box as="section" maxWidth="78vw" mx="auto" my={["20px", "0"]}>
      <Heading
        as="header"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        rowGap={["20px", "0px"]}
        flexDirection={["column", "row"]}
        mt={["0", "24px"]}
      >
        <Flex columnGap="48px" align="center">
          <Logo width={["164px"]} height="63px" />
          <Text fontSize="md" fontWeight={400} lineHeight="18px">
            Bem vindo(a), <strong>{userData?.user.name}</strong>
          </Text>
        </Flex>
        <Flex columnGap="24px">
          <NextLink href="/cases/createCases" passHref>
            <Button colorScheme="red" px="48px" py="21px">
              Cadastrar novo caso
            </Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button
              bg="initial"
              borderColor="gray.100"
              border="1px"
              onClick={() => handleSignOut()}
            >
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
        justifyContent={[
          "center",
          "center",
          "center",
          "center",
          "space-between",
        ]}
        maxWidth="1120px"
      >
        {cases.map((data) => (
          <>
            <Flex
              flexDirection="column"
              bg="white"
              width={["543px"]}
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
                    type="button"
                    onClick={() => handleDeleteCase(data.id)}
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
                  R$ {data.value}
                </Text>
              </Box>
            </Flex>
          </>
        ))}
      </Flex>
    </Box>
  );
}
