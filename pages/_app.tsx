import queryClient from "config/queyClient.config";
import AuthProvider from "context/authContext";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import "styles/globals.css";
import ChakraThemeProvider from "theme/CHakraTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraThemeProvider>
        <AuthProvider>
          <Component {...pageProps} />
          <Toaster />
        </AuthProvider>
      </ChakraThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
