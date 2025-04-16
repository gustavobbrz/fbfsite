import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Icon,
  Badge,
  Button,
  Divider,
  useColorModeValue,
  Tooltip,
  Progress,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  FaCalendarCheck,
  FaFutbol,
  FaTrophy,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

const Sidebar = () => {
  const bgColor = useColorModeValue("#1A202C", "#1A202C"); // Fundo principal
  const cardBg = useColorModeValue("#2D3748", "#2D3748"); // Fundo dos cards
  const highlightColor = useColorModeValue("#FFD700", "#FFD700"); // Amarelo escuro
  const textColor = useColorModeValue("white", "white"); // Texto branco

  const nextMatch = {
    time1: "Time A",
    time2: "Time B",
    data: "20/04",
    hora: "14:00",
    campeonato: "Campeonato Estadual",
    fase: "Quartas de Final",
    placar1: 2,
    placar2: 1,
    status: "Em Andamento",
  };

  const topPlayer = {
    name: "Jogador 1",
    goals: 15,
    assists: 8,
    team: "Time A",
  };

  return (
    <Box
      w="100%"
      bg={bgColor}
      p={4}
      borderRadius="md"
      boxShadow="lg"
      overflow="hidden"
    >
      <Flex wrap="wrap" gap={4} justify="space-between" align="stretch">
        {/* Próximo Jogo */}
        <Box
          bg={cardBg}
          p={4}
          borderRadius="md"
          boxShadow="md"
          flex="1"
          minW="300px"
          _hover={{ bg: highlightColor, color: bgColor }}
          transition="all 0.3s ease"
        >
          <HStack spacing={4}>
            <Icon as={FaCalendarCheck} boxSize={6} color={highlightColor} />
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color={textColor}>
                {nextMatch.campeonato}
              </Text>
              <Text fontSize="sm" fontWeight="bold" color={highlightColor}>
                {nextMatch.fase}
              </Text>
              <HStack spacing={2}>
                <Text fontWeight="bold" color={textColor}>
                  {nextMatch.time1}
                </Text>
                <Text color={highlightColor} fontWeight="bold">
                  {nextMatch.placar1} - {nextMatch.placar2}
                </Text>
                <Text fontWeight="bold" color={textColor}>
                  {nextMatch.time2}
                </Text>
              </HStack>
              <HStack spacing={2} fontSize="sm" color={textColor}>
                <Icon as={FaClock} />
                <Text>
                  {nextMatch.data} às {nextMatch.hora}
                </Text>
                <Badge
                  colorScheme={
                    nextMatch.status === "Em Andamento" ? "green" : "gray"
                  }
                >
                  {nextMatch.status}
                </Badge>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        {/* Artilheiro */}
        <Box
          bg={cardBg}
          p={4}
          borderRadius="md"
          boxShadow="md"
          flex="1"
          minW="300px"
          _hover={{ bg: highlightColor, color: bgColor }}
          transition="all 0.3s ease"
        >
          <HStack spacing={4}>
            <Icon as={FaFutbol} boxSize={6} color={highlightColor} />
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color={textColor}>
                Artilheiro
              </Text>
              <Text fontWeight="bold" color={textColor}>
                {topPlayer.name}
              </Text>
              <Text fontSize="sm" color={textColor}>
                {topPlayer.team}
              </Text>
              <HStack spacing={4}>
                <Text fontSize="sm" color={highlightColor}>
                  {topPlayer.goals} gols
                </Text>
                <Text fontSize="sm" color={textColor}>
                  {topPlayer.assists} assistências
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        {/* Estatísticas Rápidas */}
        <Box
          bg={cardBg}
          p={4}
          borderRadius="md"
          boxShadow="md"
          flex="1"
          minW="300px"
          _hover={{ bg: highlightColor, color: bgColor }}
          transition="all 0.3s ease"
        >
          <HStack spacing={4}>
            <Icon as={FaChartLine} boxSize={6} color={highlightColor} />
            <VStack align="start" spacing={1} width="100%">
              <Text fontSize="sm" color={textColor}>
                Estatísticas da Temporada
              </Text>
              <HStack width="100%" justify="space-between">
                <VStack align="start" spacing={0}>
                  <Text fontSize="xs" color={textColor}>
                    Jogos
                  </Text>
                  <Text fontWeight="bold" color={textColor}>
                    48
                  </Text>
                </VStack>
                <VStack align="start" spacing={0}>
                  <Text fontSize="xs" color={textColor}>
                    Gols
                  </Text>
                  <Text fontWeight="bold" color={textColor}>
                    156
                  </Text>
                </VStack>
              </HStack>
              <Progress
                value={75}
                size="xs"
                colorScheme="yellow"
                width="100%"
                borderRadius="full"
              />
            </VStack>
          </HStack>
        </Box>
      </Flex>

      <Divider borderColor={highlightColor} my={4} />

      {/* Links Rápidos */}
      <HStack spacing={4} justify="center">
        <Tooltip label="Ver Agenda" hasArrow>
          <Button
            as={Link}
            to="/schedule"
            size="sm"
            bg={highlightColor}
            color={bgColor}
            _hover={{ bg: textColor, color: bgColor }}
            leftIcon={<Icon as={FaCalendarCheck} />}
          >
            Agenda
          </Button>
        </Tooltip>
        <Tooltip label="Ver Competições" hasArrow>
          <Button
            as={Link}
            to="/competitions"
            size="sm"
            bg={highlightColor}
            color={bgColor}
            _hover={{ bg: textColor, color: bgColor }}
            leftIcon={<Icon as={FaTrophy} />}
          >
            Competições
          </Button>
        </Tooltip>
      </HStack>
    </Box>
  );
};

export default Sidebar;
