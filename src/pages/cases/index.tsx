import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cases() {
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
          <Image
            src="/Logo.svg"
            alt="Logo Be-the-Hero"
            width="164px"
            height="63px"
          ></Image>
          <Text fontSize="md" fontWeight={400} lineHeight="18px">
            Bem vindo(a), APAD
          </Text>
        </Flex>
        <Flex columnGap="24px">
          <Button colorScheme="red" px="48px" py="21px">
            Cadastrar novo caso
          </Button>
          <Button bg="initial" borderColor="gray.100" border="1px">
            <AiOutlinePoweroff color="red" />
          </Button>
        </Flex>
      </Heading>
      <Box pb="30px" mt="80px">
        <Heading as="h1" fontWeight={500} fontSize="36px">
          Casos cadastrados
        </Heading>
      </Box>
      <Flex mx="auto" gap="32px" wrap="wrap" justifyContent="space-between">
        <Flex
          flexDirection="column"
          bg="white"
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
              <RiDeleteBin6Line fontSize="20px" color="gray" cursor="pointer" />
            </Heading>
            <Text fontSize="md" fontWeight={400} color="gray.500">
              Cadelinha atropelada
            </Text>
          </Box>
          <Box>
            <Heading as="h3" fontSize="xs" fontWeight={700} color="gray.600">
              Descrição:
            </Heading>
            <Text fontSize="md" fontWeight={400} color="gray.500">
              A cadelinha Jolie foi atropelada por um carro no bairro Santana e
              teve que passar por uma cirurgia às pressas.
            </Text>
          </Box>
          <Box>
            <Heading as="h4" fontSize="xs" fontWeight={700} color="gray.600">
              Valor:
            </Heading>
            <Text fontSize="md" fontWeight={400} color="gray.500">
              R$ 120,00 reais
            </Text>
          </Box>
        </Flex>

        <Flex
          flexDirection="column"
          bg="white"
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
              <RiDeleteBin6Line fontSize="20px" color="gray" cursor="pointer" />
            </Heading>
            <Text fontSize="md" fontWeight={400} color="gray.500">
              Cadelinha atropelada
            </Text>
          </Box>
          <Box>
            <Heading as="h3" fontSize="xs" fontWeight={700} color="gray.600">
              Descrição:
            </Heading>
            <Text fontSize="md" fontWeight={400} color="gray.500">
              A cadelinha Jolie foi atropelada por um carro no bairro Santana e
              teve que passar por uma cirurgia às pressas.
            </Text>
          </Box>
          <Box>
            <Heading as="h4" fontSize="xs" fontWeight={700} color="gray.600">
              Valor:
            </Heading>
            <Text fontSize="md" fontWeight={400} color="gray.500">
              R$ 120,00 reais
            </Text>
          </Box>
        </Flex>

        <Flex
          flexDirection="column"
          bg="white"
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
              <RiDeleteBin6Line fontSize="20px" color="gray" cursor="pointer" />
            </Heading>
            <Text fontSize="md" fontWeight={400} color="gray.500">
              Cadelinha atropelada
            </Text>
          </Box>
          <Box>
            <Heading as="h3" fontSize="xs" fontWeight={700} color="gray.600">
              Descrição:
            </Heading>
            <Text fontSize="md" fontWeight={400} color="gray.500">
              A cadelinha Jolie foi atropelada por um carro no bairro Santana e
              teve que passar por uma cirurgia às pressas.
            </Text>
          </Box>
          <Box>
            <Heading as="h4" fontSize="xs" fontWeight={700} color="gray.600">
              Valor:
            </Heading>
            <Text fontSize="md" fontWeight={400} color="gray.500">
              R$ 120,00 reais
            </Text>
          </Box>
        </Flex>
        <Flex
          flexDirection="column"
          bg="white"
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
              <RiDeleteBin6Line fontSize="20px" color="gray" cursor="pointer" />
            </Heading>
            <Text fontSize="md" fontWeight={400} color="gray.500">
              Cadelinha atropelada
            </Text>
          </Box>
          <Box>
            <Heading as="h3" fontSize="xs" fontWeight={700} color="gray.600">
              Descrição:
            </Heading>
            <Text fontSize="md" fontWeight={400} color="gray.500">
              A cadelinha Jolie foi atropelada por um carro no bairro Santana e
              teve que passar por uma cirurgia às pressas.
            </Text>
          </Box>
          <Box>
            <Heading as="h4" fontSize="xs" fontWeight={700} color="gray.600">
              Valor:
            </Heading>
            <Text fontSize="md" fontWeight={400} color="gray.500">
              R$ 120,00 reais
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
