import {
  Box,
  Flex,
  Button,
  useColorMode,
  IconButton,
  Container,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuthenticated, logout } = useAuth();

  return (
    <Box bg="white" _dark={{ bg: 'gray.800' }} shadow="sm">
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <RouterLink to="/">
            <Box fontWeight="bold" fontSize="xl">
              Logo
            </Box>
          </RouterLink>

          <Flex alignItems="center" gap={4}>
            <IconButton
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              variant="ghost"
            />

            {isAuthenticated ? (
              <>
                <Button as={RouterLink} to="/dashboard" variant="ghost">
                  Dashboard
                </Button>
                <Button onClick={logout} variant="ghost">
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Button as={RouterLink} to="/login" variant="ghost">
                  Login
                </Button>
                <Button as={RouterLink} to="/register" colorScheme="blue">
                  Cadastrar
                </Button>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
} 