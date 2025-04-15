import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Navbar, InfoBar, Footer } from '../components';

const MainLayout = () => {
  const bgColor = useColorModeValue('gray.900', 'gray.900');
  const contentBg = useColorModeValue('gray.800', 'gray.800');
  const borderColor = useColorModeValue('gray.700', 'gray.700');

  return (
    <Box minH="100vh" display="flex" flexDirection="column" w="100%" bg={bgColor}>
      <Navbar />
      <InfoBar />
      <Box flex="1" w="100%" display="flex" justifyContent="center">
        <Box w="100%" maxW="1200px" px={{ base: 4, md: 6 }} py={6}>
          <Box 
            bg={contentBg} 
            p={{ base: 4, md: 6 }} 
            borderRadius="lg" 
            shadow="lg"
            borderWidth="1px"
            borderColor={borderColor}
            w="100%"
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