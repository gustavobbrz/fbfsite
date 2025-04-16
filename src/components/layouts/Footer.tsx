import { Box, Container, SimpleGrid, Stack, Text, Link, IconButton, Image, Button, Input, HStack, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      bg="#262626"
      color="gray.300"
      borderTop="1px"
      borderColor="gray.700"
    >
      <Container as={Stack} maxW="1200px" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <RouterLink to="/">
              <HStack spacing={3} mb={4}>
                <Image h="40px" src="/logo.png" alt="FBF Logo" />
                <Text fontSize="xl" fontWeight="bold" color="brand.400">
                  FBF
                </Text>
              </HStack>
            </RouterLink>
            <Text fontSize="sm" color="gray.400">
              Federação Brasileira de Futebol - Promovendo o esporte e desenvolvendo talentos em todo o Brasil.
            </Text>
            <HStack spacing={4} mt={4}>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                size="md"
                color="gray.400"
                variant="ghost"
                _hover={{
                  bg: 'whiteAlpha.200',
                  color: 'white',
                }}
                as="a"
                href="https://facebook.com"
                target="_blank"
              />
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="md"
                color="gray.400"
                variant="ghost"
                _hover={{
                  bg: 'whiteAlpha.200',
                  color: 'white',
                }}
                as="a"
                href="https://twitter.com"
                target="_blank"
              />
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                size="md"
                color="gray.400"
                variant="ghost"
                _hover={{
                  bg: 'whiteAlpha.200',
                  color: 'white',
                }}
                as="a"
                href="https://instagram.com"
                target="_blank"
              />
              <IconButton
                aria-label="YouTube"
                icon={<FaYoutube />}
                size="md"
                color="gray.400"
                variant="ghost"
                _hover={{
                  bg: 'whiteAlpha.200',
                  color: 'white',
                }}
                as="a"
                href="https://youtube.com"
                target="_blank"
              />
            </HStack>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2} color="brand.400">
              Competições
            </Text>
            <Link as={RouterLink} to="/competitions/principal" color="gray.400" _hover={{ color: 'white' }}>
              FBF Principal
            </Link>
            <Link as={RouterLink} to="/competitions/copa" color="gray.400" _hover={{ color: 'white' }}>
              Copa FBF
            </Link>
            <Link as={RouterLink} to="/competitions/semanal" color="gray.400" _hover={{ color: 'white' }}>
              FBF Semanal
            </Link>
            <Link as={RouterLink} to="/competitions" color="gray.400" _hover={{ color: 'white' }}>
              Ver Todas
            </Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2} color="brand.400">
              Links Úteis
            </Text>
            <Link as={RouterLink} to="/calendar" color="gray.400" _hover={{ color: 'white' }}>
              Calendário
            </Link>
            <Link as={RouterLink} to="/teams" color="gray.400" _hover={{ color: 'white' }}>
              Times
            </Link>
            <Link as={RouterLink} to="/about" color="gray.400" _hover={{ color: 'white' }}>
              Sobre a FBF
            </Link>
            <Link as={RouterLink} to="/contact" color="gray.400" _hover={{ color: 'white' }}>
              Contato
            </Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2} color="brand.400">
              Newsletter
            </Text>
            <Text fontSize="sm" color="gray.400">
              Receba as últimas notícias e atualizações sobre as competições.
            </Text>
            <InputGroup size="md" mt={4}>
              <Input
                placeholder="Seu e-mail"
                bg="#1a1a1a"
                border="1px solid"
                borderColor="gray.700"
                _hover={{ borderColor: 'gray.600' }}
                _focus={{ borderColor: 'brand.400', boxShadow: 'none' }}
                color="white"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  bg="accent.500"
                  _hover={{ bg: 'accent.600' }}
                  leftIcon={<FaEnvelope />}
                >
                  OK
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </SimpleGrid>

        <Box
          borderTopWidth={1}
          borderStyle="solid"
          borderColor="gray.700"
          pt={8}
          mt={8}
          textAlign="center"
        >
          <Text color="gray.500">
            © {new Date().getFullYear()} Federação Brasileira de Futebol. Todos os direitos reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 