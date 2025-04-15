import { Box, Heading, Text, Container } from '@chakra-ui/react';

const News = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Box>
        <Heading as="h1" size="xl" mb={6}>
          Notícias
        </Heading>
        <Text>
          Página em construção. Em breve você encontrará aqui as últimas notícias do mundo do futebol.
        </Text>
      </Box>
    </Container>
  );
};

export default News; 