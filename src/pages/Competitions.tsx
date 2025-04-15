import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Link as ChakraLink,
  VStack,
  HStack,
  Icon,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  CardBody,
  Badge,
  Button,
  Flex,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaFutbol, FaCalendar, FaMedal } from 'react-icons/fa';

interface Competition {
  id: string;
  name: string;
  image: string;
  description: string;
  route: string;
}

interface CompetitionSection {
  title: string;
  description: string;
  status: 'active' | 'upcoming' | 'finished';
  nextMatch?: {
    time1: string;
    time2: string;
    data: string;
    hora: string;
  };
  items: { name: string; icon: string; path: string }[];
}

const competitions: Competition[] = [
  {
    id: 'fbf-principal',
    name: 'FBF PRINCIPAL',
    image: '/images/competitions/fbf-principal.jpg',
    description: 'O principal campeonato da FBF, onde os melhores times se enfrentam.',
    route: '/competitions/principal',
  },
  {
    id: 'fbf-semanal',
    name: 'FBF SEMANAL',
    image: '/images/competitions/fbf-semanal.jpg',
    description: 'Torneios semanais com premiações especiais.',
    route: '/competitions/semanal',
  },
  {
    id: 'copa-fbf',
    name: 'COPA FBF',
    image: '/images/competitions/copa-fbf.jpg',
    description: 'Torneio de Copa FBF, onde os melhores times se enfrentam.',
    route: '/competitions/copa',
  },
  {
    id: 'fbf-aspirantes',
    name: 'FBF ASPIRANTES',
    image: '/images/competitions/fbf-aspirantes.jpg',
    description: 'Campeonatos para times aspirantes.',
    route: '/competitions/aspirantes',
  },
  {
    id: 'urun',
    name: 'URUN',
    image: '/images/competitions/urun.jpg',
    description: 'Campeonatos de futebol universitário.',
    route: '/competitions/urun',
  },
  {
    id: 'fbf-pre-temporada',
    name: 'FBF PRÉ-TEMPORADA',
    image: '/images/competitions/fbf-pre-temporada.jpg',
    description: 'Campeonatos pré-temporada para preparação dos times.',
    route: '/competitions/pre-temporada',
  },
  {
    id: 'fbf-x1-rei-das-quadras',
    name: 'FBF X1 REI DAS QUADRAS',
    image: '/images/competitions/fbf-x1.jpg',
    description: 'Campeonatos de futebol de quadra.',
    route: '/competitions/x1',
  },
];

const CompetitionCard = ({ competition }: { competition: CompetitionSection }) => {
  const statusColors = {
    active: 'green',
    upcoming: 'blue',
    finished: 'gray',
  };

  const statusText = {
    active: 'Em Andamento',
    upcoming: 'Em Breve',
    finished: 'Finalizado',
  };

  return (
    <Card variant="outline" _hover={{ shadow: 'md' }}>
      <CardBody>
        <VStack align="stretch" spacing={4}>
          <HStack justify="space-between">
            <Heading size="md" color="brand.primary">
              🏆 {competition.title}
            </Heading>
            <Badge colorScheme={statusColors[competition.status]}>
              {statusText[competition.status]}
            </Badge>
          </HStack>

          <Text color="gray.600">{competition.description}</Text>

          {competition.nextMatch && (
            <Box bg="gray.50" p={4} borderRadius="md">
              <Text fontWeight="bold" mb={2}>
                <Icon as={FaCalendar} mr={2} />
                Próximo Jogo
              </Text>
              <Flex justify="space-between" align="center">
                <Text>{competition.nextMatch.time1}</Text>
                <Badge>VS</Badge>
                <Text>{competition.nextMatch.time2}</Text>
              </Flex>
              <Text fontSize="sm" color="gray.600" mt={2}>
                {competition.nextMatch.data} às {competition.nextMatch.hora}
              </Text>
            </Box>
          )}

          <VStack align="stretch" spacing={1}>
            {competition.items.map((item, itemIdx) => (
              <Link key={itemIdx} to={item.path}>
                <Button
                  variant="ghost"
                  width="full"
                  justifyContent="flex-start"
                  leftIcon={<Text fontSize="lg">{item.icon}</Text>}
                  _hover={{ bg: 'gray.50', transform: 'translateX(5px)' }}
                  transition="all 0.2s"
                  py={6}
                  borderBottomWidth={itemIdx !== competition.items.length - 1 ? "1px" : "0"}
                  borderColor="gray.100"
                  borderRadius={0}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </VStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

const Competitions = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Box mb={8}>
        <Heading as="h1" size="2xl" mb={4}>
          Competições
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Explore todas as competições disponíveis na FBF
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {competitions.map((competition) => (
          <Box
            key={competition.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: 'translateY(-4px)' }}
            boxShadow="md"
          >
            <Image
              src={competition.image}
              alt={competition.name}
              height="200px"
              width="100%"
              objectFit="cover"
            />
            <VStack p={6} align="stretch" spacing={4}>
              <Heading size="md">{competition.name}</Heading>
              <Text color="gray.600">{competition.description}</Text>
              <Button
                as={Link}
                to={competition.route}
                colorScheme="blue"
                size="md"
                width="full"
              >
                Ver Detalhes
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Competitions; 