import { Box, Container, Text, Stack, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box bg="white" _dark={{ bg: 'gray.800' }} py={4}>
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify="space-between"
          align="center"
        >
          <Text>© 2024 Sua Empresa. Todos os direitos reservados.</Text>
          <Stack direction="row" spacing={6}>
            <Link href="#" _hover={{ color: 'blue.500' }}>
              Sobre
            </Link>
            <Link href="#" _hover={{ color: 'blue.500' }}>
              Contato
            </Link>
            <Link href="#" _hover={{ color: 'blue.500' }}>
              Termos
            </Link>
            <Link href="#" _hover={{ color: 'blue.500' }}>
              Privacidade
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
} 