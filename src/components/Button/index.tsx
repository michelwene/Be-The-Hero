import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface ButtonProps extends ChakraButtonProps {
  colorScheme?: string;
  variant?: string;
  size?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;

  children: React.ReactNode;
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { colorScheme, variant, size, leftIcon, rightIcon, children, ...rest },
  ref
) => {
  return (
    <ChakraButton
      colorScheme={colorScheme}
      variant={variant}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      {...rest}
      _active={{
        transform: "scale(0.98)",
      }}
    >
      {children}
    </ChakraButton>
  );
};

export const Button = forwardRef(ButtonBase);
