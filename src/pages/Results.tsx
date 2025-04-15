import { Box, Heading, Text, Container } from '@chakra-ui/react';

const Results = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Box>
        <Heading as="h1" size="xl" mb={6}>
          Resultados
        </Heading>
        <Text>
          Página em construção. Em breve você encontrará aqui os resultados das competições.
        </Text>
      </Box>
    </Container>
  );
};

export default Results; 