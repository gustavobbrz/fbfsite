import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Container,
  Stack,
  Button,
  Flex,
  Badge,
  HStack,
  VStack,
  Image,
} from '@chakra-ui/react';
import { FaTrophy, FaCalendar, FaNewspaper, FaFutbol, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Dados de exemplo - você pode substituir com dados reais depois
const nextMatches = [
  { time1: 'Time A', time2: 'Time B', data: '20/04', hora: '14:00', campeonato: 'FBF Principal' },
  { time1: 'Time C', time2: 'Time D', data: '20/04', hora: '15:30', campeonato: 'Copa FBF' },
  { time1: 'Time E', time2: 'Time F', data: '21/04', hora: '14:00', campeonato: 'FBF Aspirantes' },
];

const latestNews = [
  {
    title: 'Final do Campeonato',
    description: 'Grande final da FBF Principal acontecerá no próximo domingo',
    date: '15/04/2024',
  },
  {
    title: 'Novo Torneio',
    description: 'Inscrições abertas para o Torneio de Pré-Temporada',
    date: '14/04/2024',
  },
];

const Home = () => {
  return (
    <Box w="100%">
      {/* Hero Section */}
      <Box
        bg="brand.primary"
        color="white"
        py={16}
        px={4}
        borderRadius="lg"
        mb={8}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="url('/soccer-pattern.png')"
          opacity={0.1}
        />
        <Container maxW="container.xl" position="relative">
          <Stack spacing={6} maxW="2xl">
            <Heading as="h1" size="2xl">
              Bem-vindo à FBF
            </Heading>
            <Text fontSize="xl" opacity={0.9}>
              Sua casa do futebol virtual - Onde os campeões são feitos
            </Text>
            <HStack spacing={4}>
              <Button
                as={Link}
                to="/competitions"
                size="lg"
                bg="white"
                color="brand.primary"
                _hover={{ bg: 'gray.100' }}
              >
                Ver Campeonatos
              </Button>
              <Button
                as={Link}
                to="/schedule"
                size="lg"
                variant="outline"
                borderColor="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                Programação
              </Button>
            </HStack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl">
        {/* Próximos Jogos */}
        <Box mb={12}>
          <Heading size="lg" mb={6}>
            <HStack>
              <Icon as={FaFutbol} color="brand.primary" />
              <Text>Próximos Jogos</Text>
            </HStack>
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {nextMatches.map((match, idx) => (
              <Card key={idx} variant="outline" _hover={{ shadow: 'md' }}>
                <CardBody>
                  <VStack spacing={3}>
                    <Badge colorScheme="green">{match.campeonato}</Badge>
                    <Flex justify="space-between" w="100%" align="center">
                      <Text fontWeight="bold">{match.time1}</Text>
                      <Text color="gray.500">VS</Text>
                      <Text fontWeight="bold">{match.time2}</Text>
                    </Flex>
                    <HStack color="gray.600">
                      <Icon as={FaCalendar} />
                      <Text>{match.data}</Text>
                      <Text>•</Text>
                      <Text>{match.hora}</Text>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Destaques */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={12}>
          <Card
            _hover={{
              transform: 'translateY(-5px)',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <CardBody textAlign="center" p={8}>
              <Icon as={FaTrophy} w={10} h={10} color="brand.primary" mb={4} />
              <Heading size="md" mb={4}>
                Competições
              </Heading>
              <Text color="gray.600">
                Participe dos nossos campeonatos e torneios exclusivos.
              </Text>
            </CardBody>
          </Card>

          <Card
            _hover={{
              transform: 'translateY(-5px)',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <CardBody textAlign="center" p={8}>
              <Icon as={FaChartBar} w={10} h={10} color="brand.primary" mb={4} />
              <Heading size="md" mb={4}>
                Estatísticas
              </Heading>
              <Text color="gray.600">
                Acompanhe o desempenho dos times e jogadores.
              </Text>
            </CardBody>
          </Card>

          <Card
            _hover={{
              transform: 'translateY(-5px)',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <CardBody textAlign="center" p={8}>
              <Icon as={FaNewspaper} w={10} h={10} color="brand.primary" mb={4} />
              <Heading size="md" mb={4}>
                Notícias
              </Heading>
              <Text color="gray.600">
                Fique por dentro das últimas novidades da FBF.
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>

        {/* Últimas Notícias */}
        <Box mb={8}>
          <Heading size="lg" mb={6}>
            <HStack>
              <Icon as={FaNewspaper} color="brand.primary" />
              <Text>Últimas Notícias</Text>
            </HStack>
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {latestNews.map((news, idx) => (
              <Card key={idx} direction="row" overflow="hidden" variant="outline">
                <Stack p={4} flex={1}>
                  <Heading size="md">{news.title}</Heading>
                  <Text py={2}>{news.description}</Text>
                  <Text color="gray.500" fontSize="sm">
                    {news.date}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 