import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  VStack,
  HStack,
  Icon,
  Badge,
  Divider,
  Image,
} from '@chakra-ui/react';
import { FaTrophy, FaMedal, FaHistory } from 'react-icons/fa';

// Dados dos títulos por temporada
const seasons = [
  {
    number: 17,
    status: 'current',
    champions: [],
    description: 'Temporada atual em andamento',
  },
  {
    number: 16,
    champions: [
      { title: 'FBF Principal', team: 'Time Campeão', coach: 'Técnico A' },
      { title: 'Copa FBF', team: 'Time Vencedor', coach: 'Técnico B' },
    ],
    description: 'Uma temporada marcada por grandes jogos',
  },
  // Adicione mais temporadas aqui
];

const FBFHistory = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" mb={8}>
          <Heading size="2xl" mb={4}>
            <Icon as={FaHistory} mr={4} color="brand.primary" />
            História da FBF
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Museu de títulos e conquistas ao longo das temporadas
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {seasons.map((season) => (
            <Card key={season.number} variant="outline" overflow="hidden">
              <CardBody>
                <VStack align="stretch" spacing={4}>
                  <HStack justify="space-between">
                    <Heading size="md" color="brand.primary">
                      {season.status === 'current' ? (
                        <Badge colorScheme="yellow" fontSize="lg">
                          Temporada {season.number} - Atual
                        </Badge>
                      ) : (
                        `Temporada ${season.number}`
                      )}
                    </Heading>
                    <Icon as={FaTrophy} boxSize={6} color="yellow.500" />
                  </HStack>

                  <Text color="gray.600">{season.description}</Text>

                  {season.champions && season.champions.length > 0 ? (
                    <VStack align="stretch" spacing={3}>
                      <Divider />
                      {season.champions.map((champion, idx) => (
                        <Box key={idx} p={3} bg="yellow.50" borderRadius="md">
                          <HStack justify="space-between">
                            <VStack align="start" spacing={1}>
                              <Badge colorScheme="yellow">{champion.title}</Badge>
                              <Text fontWeight="bold">{champion.team}</Text>
                              <Text fontSize="sm" color="gray.600">
                                Técnico: {champion.coach}
                              </Text>
                            </VStack>
                            <Icon as={FaMedal} boxSize={6} color="yellow.500" />
                          </HStack>
                        </Box>
                      ))}
                    </VStack>
                  ) : (
                    <Text color="gray.500" fontStyle="italic">
                      Temporada em andamento
                    </Text>
                  )}
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {/* Seção de Recordes e Estatísticas */}
        <Box mt={12}>
          <Heading size="lg" mb={6}>
            <Icon as={FaMedal} mr={2} />
            Recordes e Conquistas
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Card>
              <CardBody>
                <VStack>
                  <Icon as={FaTrophy} boxSize={8} color="yellow.500" mb={2} />
                  <Text fontWeight="bold">Maior Campeão</Text>
                  <Text>Nome do Time</Text>
                  <Badge colorScheme="yellow">5 títulos</Badge>
                </VStack>
              </CardBody>
            </Card>
            {/* Adicione mais cards de recordes aqui */}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default FBFHistory; 