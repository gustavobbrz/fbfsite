import { Box, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"; // Corrigido: importando Sidebar corretamente
import Footer from "./Footer"; // Adicionado import do Footer

const MainLayout = () => {
  const bgColor = useColorModeValue("gray.50", "#1a1a1a"); // Adicionado suporte a light/dark mode
  const contentBg = useColorModeValue("white", "#262626");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      w="100vw"
      bg={bgColor}
      overflowX="hidden"
    >
      <Navbar />
      <Sidebar /> {/* Corrigido: usando o componente Sidebar (não InfoBar) */}
      <Box
        as="main"
        flex="1"
        w="100%"
        display="flex"
        justifyContent="center"
        px={0}
        pt={4} // Adicionado padding top para espaçamento
      >
        <Box
          w="100%"
          maxW={{ base: "100%", xl: "1200px" }}
          px={{ base: 4, md: 6 }}
          py={6}
        >
          <Box
            bg={contentBg}
            p={{ base: 4, md: 6 }}
            borderRadius="lg"
            shadow="xl"
            borderWidth="1px"
            borderColor={borderColor}
            w="100%"
            minH="calc(100vh - 200px)"
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
