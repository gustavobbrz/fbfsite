import { BrowserRouter } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import { Suspense } from "react";
import AppRoutes from "./theme/routes";
import theme from "./theme/theme";
import LoadingScreen from "./components/LoadingScreen";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <ErrorBoundary>
            <Suspense fallback={<LoadingScreen />}>
              {/* Main App Container */}
              <Box minH="100vh" bg="gray.50" _dark={{ bg: "gray.900" }}>
                <AppRoutes />
              </Box>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </ChakraProvider>
    </HelmetProvider>
  );
};

export default App;
