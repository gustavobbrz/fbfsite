import { Box, Container, Heading, Text } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Box>
        <Heading as="h1" size="xl" mb={6}>
          Contato
        </Heading>
        <Text>
          Página em construção. Em breve você encontrará aqui informações de contato da FBF.
        </Text>
      </Box>
    </Container>
  );
};

export default Contact; 