import { Box, Text } from "@chakra-ui/react";

interface InputErrorProps {
  children?: React.ReactNode;
}

export function InputError({ children }: InputErrorProps) {
  return (
    <Box>
      <Text color="red" fontWeight={700}>
        {children}
      </Text>
    </Box>
  );
}
