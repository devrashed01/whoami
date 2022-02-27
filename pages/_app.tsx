import type { AppProps } from "next/app";
import "../styles/globals.css";
import ChakraThemeProvider from "../theme/CHakraTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraThemeProvider>
      <Component {...pageProps} />
    </ChakraThemeProvider>
  );
}

export default MyApp;
