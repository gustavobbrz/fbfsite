import { useState } from "react";
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
  Avatar,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Flex,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUsers, FaTrophy } from "react-icons/fa"; // Removed unused icons FaFutbol, FaChartLine
import TeamModal from "../components/features/teams/TeamModal"; // Corrected import path
import { teams } from "../data/teams"; // Import the teams data

interface Player {
  id: number;
  name: string;
  number: string;
  position: string;
  photo?: string;
  stats: {
    games: number;
    goals: number;
    assists: number;
  };
}

interface Team {
  id: number;
  name: string;
  logo: string;
  division: string;
  founded: string;
  titles: {
    fbfPrincipal: number;
    copaFbf: number;
    total: number;
  };
  players: Player[];
  staff: {
    name: string;
    role: string;
  }[];
  achievements: string[];
}

const Teams = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const handleTeamClick = (team: Team) => {
    setSelectedTeam(team);
    onOpen();
  };

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading size="2xl" mb={2}>
            <Icon as={FaUsers} mr={2} />
            Times
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Conheça os times que fazem parte da FBF
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {teams.map((team) => (
            <Card
              key={team.id}
              cursor="pointer"
              onClick={() => handleTeamClick(team)}
              _hover={{ transform: "translateY(-2px)", shadow: "md" }}
              transition="all 0.2s"
            >
              <CardBody>
                <Flex align="center" gap={4}>
                  <Box boxSize="70px">
                    {team.logo ? (
                      <Image
                        src={team.logo}
                        alt={team.name}
                        borderRadius="full"
                        objectFit="cover"
                      />
                    ) : (
                      <Skeleton boxSize="70px" borderRadius="full" />
                    )}
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Heading size="md">{team.name}</Heading>
                    <HStack>
                      <Badge colorScheme="blue">{team.division}</Badge>
                      <Text fontSize="sm" color="gray.500">
                        Fundado em {team.founded}
                      </Text>
                    </HStack>
                  </VStack>
                  <Box ml="auto">
                    <HStack>
                      <Icon as={FaTrophy} color="yellow.500" />
                      <Text>{team.titles.total}</Text>
                    </HStack>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {selectedTeam && (
          <TeamModal isOpen={isOpen} onClose={onClose} team={selectedTeam} />
        )}
      </VStack>
    </Container>
  );
};

// Criar um novo componente TeamModal para mostrar os detalhes
