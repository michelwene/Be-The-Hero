import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  VStack,
} from "@chakra-ui/react";

export default function Register() {
  return (
    <>
      <Flex as="section">
        <Flex>
          <VStack>
            <Image />
            <Box></Box>
            <Button>Voltar para o logon</Button>
          </VStack>

          <Box>
            <form>
              <FormControl></FormControl>
            </form>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
