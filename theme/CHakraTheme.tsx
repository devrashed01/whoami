import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    primary: {
      main: "#047ffd",
    },
  },
});

interface IChakraThemeProviderProps {
  children: React.ReactElement;
}

export default function ChakraThemeProvider({
  children,
}: IChakraThemeProviderProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
