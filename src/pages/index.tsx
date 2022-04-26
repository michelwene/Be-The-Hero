import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineExitToApp } from "react-icons/md";

export default function Home() {
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
          <Image src="/Logo.svg" alt="logo" />
          <VStack spacing={5} mt="110px" alignItems="flex-start" width="351px">
            <Heading as="h1" size="lg" fontWeight={500} fontSize="36px">
              Faça seu logon
            </Heading>
            <Input
              bg="white"
              focusBorderColor="red.500"
              maxWidth="351px"
              placeholder="Sua ID"
              size="lg"
            />
            <Button
              colorScheme="red"
              width="100%"
              size="lg"
              loadingText="Entrando"
              maxWidth="351px"
            >
              Entrar
            </Button>
            <Button
              leftIcon={<MdOutlineExitToApp color="red" />}
              variant="link"
              alignSelf="flex-start"
              colorScheme="gray.1000"
              _active={{
                transform: "scale(0.98)",
              }}
            >
              Não tenho cadastro
            </Button>
          </VStack>
        </Box>
        <Box>
          <Image src="/Pessoas.svg" objectFit="cover" alt="pessoas" />
        </Box>
      </Flex>
    </>
  );
}
