import {
  Box,
  Flex,
  Text,
  HStack,
  Icon,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider,
  Container,
  Button,
  useColorModeValue,
  Tooltip,
  VStack,
  Progress,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  FaCalendarCheck,
  FaFutbol,
  FaTrophy,
  FaChartLine,
  FaBullhorn,
  FaArrowRight,
  FaClock,
} from 'react-icons/fa';

// Dados de exemplo - substituir por dados reais
const nextMatches = [
  { 
    time1: 'Time A', 
    time2: 'Time B', 
    data: '20/04', 
    hora: '14:00',
    campeonato: 'Campeonato Estadual',
    fase: 'Quartas de Final',
    placar1: 2,
    placar2: 1,
    status: 'Em Andamento'
  },
  { 
    time1: 'Time C', 
    time2: 'Time D', 
    data: '20/04', 
    hora: '15:30',
    campeonato: 'Copa do Estado',
    fase: 'Semifinal',
    placar1: 0,
    placar2: 0,
    status: 'Agendado'
  },
];

const topPlayers = [
  { name: 'Jogador 1', goals: 15, assists: 8, team: 'Time A' },
  { name: 'Jogador 2', goals: 12, assists: 10, team: 'Time B' },
];

const InfoBar = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const highlightColor = useColorModeValue('brand.50', 'brand.900');

  return (
    <Box
      w="100%"
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      py={2}
      position="sticky"
      top="60px"
      zIndex={2}
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
          {/* Próximo Jogo */}
          <Box flex="1" minW="300px">
            <HStack spacing={4} p={2} bg={highlightColor} rounded="md">
              <Icon as={FaCalendarCheck} color="brand.500" boxSize={5} />
              <VStack align="start" spacing={0}>
                <Text fontSize="xs" color="gray.500">{nextMatches[0].campeonato}</Text>
                <Text fontSize="xs" color="brand.500" fontWeight="bold">{nextMatches[0].fase}</Text>
                <HStack spacing={2}>
                  <Text fontWeight="bold">{nextMatches[0].time1}</Text>
                  <Text color="brand.500" fontWeight="bold">
                    {nextMatches[0].placar1} - {nextMatches[0].placar2}
                  </Text>
                  <Text fontWeight="bold">{nextMatches[0].time2}</Text>
                </HStack>
                <HStack spacing={2} fontSize="xs" color="gray.500">
                  <Icon as={FaClock} />
                  <Text>{nextMatches[0].data} às {nextMatches[0].hora}</Text>
                  <Badge colorScheme={nextMatches[0].status === 'Em Andamento' ? 'green' : 'gray'}>
                    {nextMatches[0].status}
                  </Badge>
                </HStack>
              </VStack>
            </HStack>
          </Box>

          <Divider orientation="vertical" h="60px" />

          {/* Artilheiro */}
          <Box flex="1" minW="250px">
            <HStack spacing={4} p={2} bg={highlightColor} rounded="md">
              <Icon as={FaFutbol} color="brand.500" boxSize={5} />
              <VStack align="start" spacing={0}>
                <Text fontSize="xs" color="gray.500">Artilheiro</Text>
                <Text fontWeight="bold">{topPlayers[0].name}</Text>
                <Text fontSize="xs" color="gray.500">{topPlayers[0].team}</Text>
                <HStack spacing={4}>
                  <Text fontSize="sm" color="brand.500">{topPlayers[0].goals} gols</Text>
                  <Text fontSize="sm" color="gray.500">{topPlayers[0].assists} assistências</Text>
                </HStack>
              </VStack>
            </HStack>
          </Box>

          <Divider orientation="vertical" h="60px" />

          {/* Estatísticas Rápidas */}
          <Box flex="1" minW="250px">
            <HStack spacing={4} p={2} bg={highlightColor} rounded="md">
              <Icon as={FaChartLine} color="brand.500" boxSize={5} />
              <VStack align="start" spacing={1} width="100%">
                <Text fontSize="xs" color="gray.500">Estatísticas da Temporada</Text>
                <HStack width="100%" justify="space-between">
                  <Stat size="sm">
                    <StatLabel fontSize="xs" color="gray.500">Jogos</StatLabel>
                    <StatNumber>48</StatNumber>
                    <StatHelpText>Temporada 2024</StatHelpText>
                  </Stat>
                  <Stat size="sm">
                    <StatLabel fontSize="xs" color="gray.500">Gols</StatLabel>
                    <StatNumber>156</StatNumber>
                    <StatHelpText>Média: 3.25</StatHelpText>
                  </Stat>
                </HStack>
                <Progress 
                  value={75} 
                  size="xs" 
                  colorScheme="brand" 
                  width="100%" 
                  borderRadius="full"
                />
              </VStack>
            </HStack>
          </Box>

          <Divider orientation="vertical" h="60px" />

          {/* Links Rápidos */}
          <HStack spacing={2}>
            <Button
              as={Link}
              to="/schedule"
              size="sm"
              variant="ghost"
              colorScheme="brand"
              leftIcon={<Icon as={FaCalendarCheck} />}
            >
              Agenda
            </Button>
            <Button
              as={Link}
              to="/competitions"
              size="sm"
              variant="ghost"
              colorScheme="brand"
              leftIcon={<Icon as={FaTrophy} />}
            >
              Competições
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default InfoBar; 