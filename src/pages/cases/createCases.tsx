import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function createCases() {
  return (
    <Flex
      as="section"
      borderRadius="8px"
      boxShadow="2xl"
      justifyContent="space-around"
      width="78vw"
      mx="auto"
      my="auto"
    >
      <Flex flexDirection="column" maxHeight="381px" py="94px">
        <Image
          src="/Logo.svg"
          alt="Logo Be-the-Hero"
          width="191px"
          height="80px"
        />
        <Heading as="h1" mt="64px" mb="32px">
          Cadastrar novo caso
        </Heading>
        <Text>
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
        <Input type="text" placeholder="Título do caso" />
        <Input placeholder="Descrição" />
        <Input placeholder="Valor em reais" />
        <Flex>
          <Button>Cancelar</Button>
          <Button colorScheme="red">Cadastrar</Button>
        </Flex>
      </VStack>
    </Flex>
  );
}
