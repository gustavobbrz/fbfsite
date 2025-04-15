import { Box, Container, SimpleGrid, Stack, Text, Link, IconButton, useColorModeValue, Image, Button, Input, HStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const highlightColor = useColorModeValue('brand.50', 'brand.900');

  return (
    <Box
      bg={bgColor}
      color={textColor}
      borderTop="1px"
      borderColor={borderColor}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Box mb={4}>
              <Image
                src="/logo.png"
                alt="FBF Logo"
                h="40px"
                objectFit="contain"
              />
            </Box>
            <Text fontSize={'sm'}>
              Federação Brasileira de Futebol - Promovendo o esporte e desenvolvendo talentos em todo o Brasil.
            </Text>
            <HStack spacing={4} mt={4}>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                size="md"
                color={textColor}
                variant="ghost"
                _hover={{
                  bg: highlightColor,
                  color: 'brand.500',
                }}
                as="a"
                href="https://facebook.com"
                target="_blank"
              />
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="md"
                color={textColor}
                variant="ghost"
                _hover={{
                  bg: highlightColor,
                  color: 'brand.500',
                }}
                as="a"
                href="https://twitter.com"
                target="_blank"
              />
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                size="md"
                color={textColor}
                variant="ghost"
                _hover={{
                  bg: highlightColor,
                  color: 'brand.500',
                }}
                as="a"
                href="https://instagram.com"
                target="_blank"
              />
              <IconButton
                aria-label="YouTube"
                icon={<FaYoutube />}
                size="md"
                color={textColor}
                variant="ghost"
                _hover={{
                  bg: highlightColor,
                  color: 'brand.500',
                }}
                as="a"
                href="https://youtube.com"
                target="_blank"
              />
            </HStack>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              Competições
            </Text>
            <Link as={RouterLink} to="/competitions/state">Campeonato Estadual</Link>
            <Link as={RouterLink} to="/competitions/cup">Copa do Estado</Link>
            <Link as={RouterLink} to="/competitions/tables">Tabelas</Link>
            <Link as={RouterLink} to="/competitions/rules">Regulamento</Link>
            <Link as={RouterLink} to="/competitions/register">Inscrições</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              Links Úteis
            </Text>
            <Link as={RouterLink} to="/news">Notícias</Link>
            <Link as={RouterLink} to="/calendar">Calendário</Link>
            <Link as={RouterLink} to="/teams">Times</Link>
            <Link as={RouterLink} to="/membership">Sócio-Torcedor</Link>
            <Link as={RouterLink} to="/contact">Contato</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              Newsletter
            </Text>
            <Text fontSize={'sm'}>
              Receba as últimas notícias e atualizações sobre as competições.
            </Text>
            <HStack mt={4}>
              <Input
                placeholder="Seu e-mail"
                size="sm"
                bg={highlightColor}
                border="none"
                _focus={{
                  border: '1px solid',
                  borderColor: 'brand.500',
                }}
              />
              <Button
                size="sm"
                colorScheme="brand"
                leftIcon={<FaEnvelope />}
              >
                Inscrever
              </Button>
            </HStack>
          </Stack>
        </SimpleGrid>

        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={borderColor}
          pt={8}
          mt={8}
          textAlign={'center'}
        >
          <Text>
            © {new Date().getFullYear()} Federação Brasileira de Futebol. Todos os direitos reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 