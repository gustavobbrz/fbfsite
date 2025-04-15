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
import { FaTrophy, FaMedal, FaHistory, FaUniversity } from 'react-icons/fa';

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
      { title: 'URUN Principal', team: 'Universidade A', coach: 'Técnico A' },
      { title: 'Copa URUN', team: 'Universidade B', coach: 'Técnico B' },
    ],
    description: 'Uma temporada histórica para o futebol universitário',
  },
  // Adicione mais temporadas aqui
];

const UrunHistory = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" mb={8}>
          <HStack justify="center" mb={4}>
            <Icon as={FaUniversity} boxSize={10} color="brand.primary" />
            <Heading size="2xl">História da URUN</Heading>
          </HStack>
          <Text fontSize="lg" color="gray.600">
            União das Representações Universitárias - História e Conquistas
          </Text>
        </Box>

        {/* Sobre a URUN */}
        <Card variant="outline" mb={8}>
          <CardBody>
            <VStack align="stretch" spacing={4}>
              <Heading size="md" color="brand.primary">
                Sobre a URUN
              </Heading>
              <Text>
                A URUN representa a elite do futebol universitário, reunindo as melhores equipes
                das universidades em competições emocionantes e de alto nível.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        <Heading size="lg" mb={6}>
          <Icon as={FaTrophy} mr={2} />
          Museu de Títulos
        </Heading>

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

        {/* Recordes e Estatísticas */}
        <Box mt={12}>
          <Heading size="lg" mb={6}>
            <Icon as={FaMedal} mr={2} />
            Hall da Fama URUN
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Card>
              <CardBody>
                <VStack>
                  <Icon as={FaTrophy} boxSize={8} color="yellow.500" mb={2} />
                  <Text fontWeight="bold">Universidade Mais Vitoriosa</Text>
                  <Text>Nome da Universidade</Text>
                  <Badge colorScheme="yellow">4 títulos</Badge>
                </VStack>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <VStack>
                  <Icon as={FaMedal} boxSize={8} color="yellow.500" mb={2} />
                  <Text fontWeight="bold">Maior Artilheiro</Text>
                  <Text>Nome do Jogador</Text>
                  <Badge colorScheme="yellow">25 gols</Badge>
                </VStack>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <VStack>
                  <Icon as={FaUniversity} boxSize={8} color="yellow.500" mb={2} />
                  <Text fontWeight="bold">Mais Participações</Text>
                  <Text>Nome da Universidade</Text>
                  <Badge colorScheme="yellow">10 temporadas</Badge>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default UrunHistory; 