import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box textAlign="center" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          404
        </Heading>
        <Text fontSize="xl">Página não encontrada</Text>
        <Text>
          A página que você está procurando não existe ou foi movida.
        </Text>
        <Link to="/">
          <Button colorScheme="green">Voltar para a página inicial</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default NotFound; 