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
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaUsers, FaTrophy, FaFutbol, FaChartLine } from 'react-icons/fa';

// Dados de exemplo - substituir por dados reais
const teams = [
  {
    id: 1,
    name: 'Time A',
    logo: '/team-logo.png', // Adicionar logo real
    division: 'Principal',
    founded: '2020',
    titles: {
      fbfPrincipal: 2,
      copaFbf: 1,
      total: 3,
    },
    players: [
      {
        id: 1,
        name: 'Jogador 1',
        number: '10',
        position: 'Atacante',
        stats: {
          games: 25,
          goals: 15,
          assists: 8,
        },
      },
      // Adicionar mais jogadores
    ],
    staff: [
      {
        name: 'Técnico A',
        role: 'Técnico Principal',
      },
      // Adicionar mais membros da comissão
    ],
    achievements: [
      'Campeão FBF Principal 2023',
      'Vice-campeão Copa FBF 2022',
    ],
  },
  // Adicionar mais times
];

const Teams = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" mb={8}>
          <Heading size="2xl" mb={4}>
            <Icon as={FaUsers} mr={4} color="brand.primary" />
            Times
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Conheça os times que fazem parte da FBF
          </Text>
        </Box>

        {teams.map((team) => (
          <Card
            key={team.id}
            variant="outline"
            bg={cardBg}
            borderColor={borderColor}
            overflow="hidden"
          >
            <CardBody>
              <VStack spacing={6} align="stretch">
                {/* Cabeçalho do Time */}
                <Flex align="center" justify="space-between">
                  <HStack spacing={4}>
                    <Box boxSize="80px">
                      <Image
                        src={team.logo}
                        alt={`Logo ${team.name}`}
                        fallback={
                          <Icon as={FaFutbol} boxSize="40px" color="gray.400" />
                        }
                      />
                    </Box>
                    <VStack align="start" spacing={1}>
                      <Heading size="lg">{team.name}</Heading>
                      <HStack>
                        <Badge colorScheme="yellow">{team.division}</Badge>
                        <Text fontSize="sm" color="gray.500">
                          Fundado em {team.founded}
                        </Text>
                      </HStack>
                    </VStack>
                  </HStack>
                  <VStack align="end">
                    <HStack>
                      <Icon as={FaTrophy} color="yellow.500" />
                      <Text fontWeight="bold">{team.titles.total} títulos</Text>
                    </HStack>
                  </VStack>
                </Flex>

                {/* Detalhes do Time */}
                <Tabs variant="enclosed" colorScheme="yellow">
                  <TabList>
                    <Tab>Elenco</Tab>
                    <Tab>Comissão Técnica</Tab>
                    <Tab>Conquistas</Tab>
                    <Tab>Estatísticas</Tab>
                  </TabList>

                  <TabPanels>
                    {/* Elenco */}
                    <TabPanel>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>#</Th>
                            <Th>Nome</Th>
                            <Th>Posição</Th>
                            <Th isNumeric>Jogos</Th>
                            <Th isNumeric>Gols</Th>
                            <Th isNumeric>Assistências</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {team.players.map((player) => (
                            <Tr key={player.id}>
                              <Td>{player.number}</Td>
                              <Td>
                                <HStack>
                                  <Avatar
                                    size="sm"
                                    name={player.name}
                                    src={player.photo}
                                  />
                                  <Text>{player.name}</Text>
                                </HStack>
                              </Td>
                              <Td>{player.position}</Td>
                              <Td isNumeric>{player.stats.games}</Td>
                              <Td isNumeric>{player.stats.goals}</Td>
                              <Td isNumeric>{player.stats.assists}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TabPanel>

                    {/* Comissão Técnica */}
                    <TabPanel>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        {team.staff.map((member, idx) => (
                          <Box
                            key={idx}
                            p={4}
                            borderWidth="1px"
                            borderRadius="md"
                          >
                            <HStack>
                              <Avatar size="md" name={member.name} />
                              <VStack align="start" spacing={0}>
                                <Text fontWeight="bold">{member.name}</Text>
                                <Text fontSize="sm" color="gray.600">
                                  {member.role}
                                </Text>
                              </VStack>
                            </HStack>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </TabPanel>

                    {/* Conquistas */}
                    <TabPanel>
                      <VStack align="stretch" spacing={4}>
                        {team.achievements.map((achievement, idx) => (
                          <HStack
                            key={idx}
                            p={3}
                            bg="yellow.50"
                            borderRadius="md"
                          >
                            <Icon as={FaTrophy} color="yellow.500" />
                            <Text>{achievement}</Text>
                          </HStack>
                        ))}
                      </VStack>
                    </TabPanel>

                    {/* Estatísticas */}
                    <TabPanel>
                      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                        <Card>
                          <CardBody>
                            <VStack>
                              <Icon
                                as={FaTrophy}
                                boxSize={8}
                                color="yellow.500"
                                mb={2}
                              />
                              <Text fontWeight="bold">Títulos FBF Principal</Text>
                              <Badge colorScheme="yellow">
                                {team.titles.fbfPrincipal}
                              </Badge>
                            </VStack>
                          </CardBody>
                        </Card>
                        <Card>
                          <CardBody>
                            <VStack>
                              <Icon
                                as={FaTrophy}
                                boxSize={8}
                                color="yellow.500"
                                mb={2}
                              />
                              <Text fontWeight="bold">Títulos Copa FBF</Text>
                              <Badge colorScheme="yellow">
                                {team.titles.copaFbf}
                              </Badge>
                            </VStack>
                          </CardBody>
                        </Card>
                        <Card>
                          <CardBody>
                            <VStack>
                              <Icon
                                as={FaChartLine}
                                boxSize={8}
                                color="yellow.500"
                                mb={2}
                              />
                              <Text fontWeight="bold">Total de Títulos</Text>
                              <Badge colorScheme="yellow">
                                {team.titles.total}
                              </Badge>
                            </VStack>
                          </CardBody>
                        </Card>
                      </SimpleGrid>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </VStack>
    </Container>
  );
};

export default Teams; 