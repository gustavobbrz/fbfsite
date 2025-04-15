import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Text,
  Card,
  CardBody,
  Badge,
  SimpleGrid,
  Select,
  Input,
  IconButton,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';

// Dados de exemplo - substituir por dados reais da API
const mockMatches = [
  {
    id: 1,
    competition: 'FBF PRINCIPAL',
    homeTeam: 'Time A',
    awayTeam: 'Time B',
    date: '2024-03-20',
    time: '20:00',
    status: 'Agendado',
    stadium: 'Estádio Principal',
  },
  {
    id: 2,
    competition: 'COPA FBF',
    homeTeam: 'Time C',
    awayTeam: 'Time D',
    date: '2024-03-21',
    time: '19:30',
    status: 'Confirmado',
    stadium: 'Arena FBF',
  },
  // Adicione mais jogos conforme necessário
];

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedCompetition, setSelectedCompetition] = useState('all');

  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const competitions = [
    'FBF PRINCIPAL',
    'FBF SEMANAL',
    'COPA FBF',
    'FBF ASPIRANTES',
    'URUN',
    'FBF PRÉ-TEMPORADA',
    'FBF X1',
  ];

  const filteredMatches = mockMatches.filter(
    (match) =>
      (selectedCompetition === 'all' || match.competition === selectedCompetition) &&
      match.date === selectedDate
  );

  const handlePreviousDay = () => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() - 1);
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  const handleNextDay = () => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() + 1);
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  return (
    <Box p={4} w="100%">
      <Container maxW="container.xl">
        <VStack spacing={6} align="stretch">
          <Heading size="lg" mb={4}>
            Programação de Jogos
          </Heading>

          <HStack spacing={4} mb={6}>
            <IconButton
              aria-label="Dia anterior"
              icon={<ChevronLeftIcon />}
              onClick={handlePreviousDay}
            />
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              width="auto"
            />
            <IconButton
              aria-label="Próximo dia"
              icon={<ChevronRightIcon />}
              onClick={handleNextDay}
            />
            <Select
              value={selectedCompetition}
              onChange={(e) => setSelectedCompetition(e.target.value)}
              width="auto"
            >
              <option value="all">Todas as competições</option>
              {competitions.map((comp) => (
                <option key={comp} value={comp}>
                  {comp}
                </option>
              ))}
            </Select>
          </HStack>

          {filteredMatches.length === 0 ? (
            <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
              <CardBody>
                <Text textAlign="center">Nenhum jogo programado para esta data.</Text>
              </CardBody>
            </Card>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {filteredMatches.map((match) => (
                <Card
                  key={match.id}
                  bg={cardBg}
                  borderWidth="1px"
                  borderColor={borderColor}
                  _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
                  transition="all 0.2s"
                >
                  <CardBody>
                    <VStack spacing={3} align="stretch">
                      <Flex justify="space-between" align="center">
                        <Badge colorScheme="blue">{match.competition}</Badge>
                        <Badge
                          colorScheme={
                            match.status === 'Confirmado' ? 'green' : 'yellow'
                          }
                        >
                          {match.status}
                        </Badge>
                      </Flex>
                      <Box>
                        <Text fontWeight="bold" fontSize="lg">
                          {match.homeTeam} vs {match.awayTeam}
                        </Text>
                        <Text color="gray.500" fontSize="sm">
                          {match.stadium}
                        </Text>
                      </Box>
                      <HStack spacing={4}>
                        <Text color="gray.500">
                          {new Date(match.date).toLocaleDateString('pt-BR')}
                        </Text>
                        <Text color="gray.500">{match.time}</Text>
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Schedule; 