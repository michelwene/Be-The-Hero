import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function createCases() {
  return (
    <Flex as="section" minHeight="100vh" align="center" justify="center">
      <Flex
        borderRadius="8px"
        boxShadow="2xl"
        columnGap="148px"
        justifyContent="space-between"
        minHeight="577px"
        mx="auto"
        my="auto"
        px="96px"
        width="78vw"
      >
        <Flex
          flexDirection="column"
          maxHeight="381px"
          maxWidth="332px"
          py="94px"
        >
          <Image
            src="/Logo.svg"
            alt="Logo Be-the-Hero"
            width="191px"
            height="80px"
          />
          <Heading as="h1" mt="64px" mb="32px">
            Cadastrar novo caso
          </Heading>
          <Text fontSize="1.125rem" lineHeight="32px" color="gray.500">
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </Text>

          <Button
            alignSelf="flex-start"
            color="gray.1000"
            mt="84px"
            leftIcon={<BiLeftArrowAlt color="red" fontSize="1.5rem" />}
            variant="link"
            _active={{
              transform: "scale(0.98)",
            }}
          >
            Voltar para a home
          </Button>
        </Flex>
        <VStack as="form" py="94px" flex="1" maxWidth="448px">
          <Input
            type="text"
            placeholder="Título do caso"
            bg="white"
            height="60px"
          />
          <Textarea placeholder="Descrição" height="175px" bg="white" />

          <Input placeholder="Valor em reais" bg="white" height="60px" />
          <Flex width="100%" columnGap="17px">
            <Button flex="1" height="60px" variant="outline" border="2px">
              Cancelar
            </Button>
            <Button colorScheme="red" flex="2" height="60px">
              Cadastrar
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
}
