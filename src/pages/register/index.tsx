import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function Register() {
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
            <Image
              src="/Logo.svg"
              alt="Logo Be-The-Hero"
              width="191px"
              height="81px"
            />
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
            <Button
              leftIcon={<BiLeftArrowAlt color="red" fontSize="1.5rem" />}
              variant="link"
              color="gray.1000"
              _active={{
                transform: "scale(0.98)",
              }}
            >
              Voltar para o logon
            </Button>
          </VStack>

          <VStack as="form" maxWidth="448px">
            <Input type="text" placeholder="Nome da ONG" bg="white" />
            <Input type="email" name="email" placeholder="E-mail" bg="white" />
            <Input type="tel" name="phone" placeholder="Whatsapp" bg="white" />
            <Flex gap="8px">
              <Input type="text" name="city" placeholder="Cidade" bg="white" />
              <Input
                type="text"
                name="uf"
                placeholder="UF"
                flex={1}
                bg="white"
                minWidth="70px"
                _placeholder={{
                  textAlign: "center",
                }}
              />
            </Flex>
            <Button colorScheme="red" width="100%">
              Cadastrar
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}
