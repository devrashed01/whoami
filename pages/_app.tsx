import queryClient from "config/queyClient.config";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import "styles/globals.css";
import ChakraThemeProvider from "theme/CHakraTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraThemeProvider>
        <Component {...pageProps} />
      </ChakraThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
