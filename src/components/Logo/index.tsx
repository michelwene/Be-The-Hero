import { Image } from "@chakra-ui/react";

interface LogoProps {
  width?: string[];
  height?: string;
}

export function Logo({ width, height }: LogoProps) {
  return (
    <Image
      src="/Logo.svg"
      alt="Logo Be-The-Hero"
      width={width}
      height={height}
    />
  );
}
