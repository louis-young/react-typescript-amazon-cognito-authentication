import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthenticationContextProvider } from "../../context/authentication";
import { ThemeContextProvider } from "../../context/theme";
import type { ProvidersProps } from "./types";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 5000,
        }}
      />

      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeContextProvider>
            <AuthenticationContextProvider>
              {children}
            </AuthenticationContextProvider>
          </ThemeContextProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
};
