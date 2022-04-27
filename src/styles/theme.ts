import { extendTheme } from "@chakra-ui/react";
import { SERVFAIL } from "dns";

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
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        height: "100vh",
        bg: "gray.50",
        color: "gray.1000",
      },
    },
  },
});
