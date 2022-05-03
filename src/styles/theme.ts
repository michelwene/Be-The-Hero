import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "1000": "#13131A",
      "600": "#41414D",
      "500": "#737380",
      "400": "#A8A8B3",
      "200": "#B3B5C6",
      "100": "#DCDCE6",
      "50": "#F0F0F5",
    },
    red: {
      "500": "#E02041",
    },
  },
  styles: {
    global: {
      body: {
        minHeight: "100vh",
        bg: "gray.50",
        color: "gray.1000",
      },
    },
  },
});
