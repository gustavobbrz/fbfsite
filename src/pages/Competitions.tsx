import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Icon,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { competitions } from "../data/competitions"; // Import the data
import { CompetitionCard } from "../components"; // Use central components export
import PropTypes from "prop-types";

const Competitions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const toast = useToast();

  const filteredCompetitions = useMemo(() => {
    try {
      return competitions
        .filter((comp) => {
          const matchesSearch =
            comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comp.description.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesStatus =
            statusFilter === "all" || comp.status === statusFilter;
          return matchesSearch && matchesStatus;
        })
        .sort((a, b) => {
          if (sortBy === "date") {
            return (
              new Date(a.startDate || 0).getTime() -
              new Date(b.startDate || 0).getTime()
            );
          }
          if (sortBy === "teams") {
            return (b.teamsCount || 0) - (a.teamsCount || 0);
          }
          return a.name.localeCompare(b.name);
        });
    } catch (error) {
      toast({
        title: "Erro ao filtrar competições",
        status: "error",
        isClosable: true,
      });
      return competitions;
    }
  }, [searchTerm, statusFilter, sortBy]);

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" mb={2}>
            Competições
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Explore todas as competições disponíveis na FBF
          </Text>
        </Box>

        <Flex gap={4} flexWrap="wrap">
          <InputGroup flex="1" minW="200px">
            <InputLeftElement pointerEvents="none">
              <Icon as={FaSearch} color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Buscar competição..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>

          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            minW="180px"
          >
            <option value="all">Todos os Status</option>
            <option value="active">Em Andamento</option>
            <option value="upcoming">Em Breve</option>
            <option value="finished">Finalizados</option>
          </Select>

          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            minW="180px"
          >
            <option value="name">Ordenar por: Nome</option>
            <option value="date">Ordenar por: Data</option>
            <option value="teams">Ordenar por: Times</option>
          </Select>
        </Flex>

        {filteredCompetitions.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {filteredCompetitions.map((competition) => (
              <CompetitionCard key={competition.id} competition={competition} />
            ))}
          </SimpleGrid>
        ) : (
          <Box textAlign="center" py={10}>
            <Text fontSize="lg">Nenhuma competição encontrada</Text>
            <Button
              mt={4}
              onClick={() => {
                setSearchTerm("");
                setStatusFilter("all");
              }}
            >
              Limpar filtros
            </Button>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Competitions;

// Improvements: Added PropTypes for better type safety and documentation

Competitions.propTypes = {
  competitions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      status: PropTypes.oneOf(["active", "upcoming", "finished"]),
      startDate: PropTypes.string,
      teamsCount: PropTypes.number,
    })
  ),
};

Competitions.defaultProps = {
  competitions: [],
};
