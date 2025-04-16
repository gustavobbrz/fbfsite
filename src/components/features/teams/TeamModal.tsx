import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
  HStack,
  Image,
  Badge,
  Box,
  Heading,
  Icon,
  SimpleGrid,
  Card,
  CardBody,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Skeleton,
} from "@chakra-ui/react";
import {
  FaTrophy,
  FaUsers,
  FaUserTie,
  FaListAlt,
  FaFutbol,
} from "react-icons/fa";

// Re-using interfaces from Teams.tsx - consider moving to a shared types file later
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

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  team: Team | null;
}

const TeamModal = ({ isOpen, onClose, team }: TeamModalProps) => {
  if (!team) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex align="center" gap={3}>
            {team.logo ? (
              <Image
                src={team.logo}
                alt={`${team.name} logo`}
                boxSize="40px"
                borderRadius="full"
                objectFit="cover"
              />
            ) : (
              <Skeleton boxSize="40px" borderRadius="full" />
            )}
            <Heading size="lg">{team.name}</Heading>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList mb="1em">
              <Tab>Visão Geral</Tab>
              <Tab>Jogadores</Tab>
              <Tab>Comissão Técnica</Tab>
              <Tab>Conquistas</Tab>
            </TabList>
            <TabPanels>
              {/* Visão Geral Panel */}
              <TabPanel>
                <VStack align="start" spacing={4}>
                  <HStack>
                    <Badge colorScheme="blue">{team.division}</Badge>
                    <Text fontSize="sm" color="gray.500">
                      Fundado em {team.founded}
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaTrophy} color="yellow.500" />
                    <Text fontWeight="bold">
                      {team.titles.total} Títulos Totais
                    </Text>
                  </HStack>
                  <Text>
                    ({team.titles.fbfPrincipal} FBF Principal,{" "}
                    {team.titles.copaFbf} Copa FBF)
                  </Text>
                </VStack>
              </TabPanel>

              {/* Jogadores Panel */}
              <TabPanel>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Foto</Th>
                      <Th>Nome</Th>
                      <Th>Nº</Th>
                      <Th>Posição</Th>
                      <Th isNumeric>Gols</Th>
                      <Th isNumeric>Assis.</Th>
                      <Th isNumeric>Jogos</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {team.players.map((player) => (
                      <Tr key={player.id}>
                        <Td>
                          <Avatar
                            size="sm"
                            name={player.name}
                            src={player.photo}
                          />
                        </Td>
                        <Td>{player.name}</Td>
                        <Td>{player.number}</Td>
                        <Td>{player.position}</Td>
                        <Td isNumeric>{player.stats.goals}</Td>
                        <Td isNumeric>{player.stats.assists}</Td>
                        <Td isNumeric>{player.stats.games}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TabPanel>

              {/* Comissão Técnica Panel */}
              <TabPanel>
                <VStack align="start" spacing={3}>
                  {team.staff.map((member, index) => (
                    <HStack key={index}>
                      <Icon as={FaUserTie} />
                      <Text>
                        {member.name} - {member.role}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </TabPanel>

              {/* Conquistas Panel */}
              <TabPanel>
                <VStack align="start" spacing={2}>
                  {team.achievements.map((achievement, index) => (
                    <HStack key={index}>
                      <Icon as={FaTrophy} color="green.500" />
                      <Text>{achievement}</Text>
                    </HStack>
                  ))}
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Fechar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TeamModal;
