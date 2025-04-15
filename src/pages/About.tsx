import { Box, Container, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Box>
        <Heading as="h1" size="xl" mb={6}>
          Sobre a FBF
        </Heading>
        <Text>
          Página em construção. Em breve você encontrará aqui informações sobre a FBF.
        </Text>
      </Box>
    </Container>
  );
};

export default About; 