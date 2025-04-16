import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Text,
  Avatar,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import { mockApi } from "../utils/api";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const data = await mockApi.getRanking();
        setRanking(data);
      } catch (error) {
        console.error("Failed to fetch ranking:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRanking();
  }, []);

  if (loading) {
    return (
      <Box py={8} px={4} maxW="container.lg" mx="auto" textAlign="center">
        <Spinner size="xl" />
        <Text mt={4}>Carregando ranking...</Text>
      </Box>
    );
  }

  return (
    <Box py={8} px={4} maxW="container.lg" mx="auto">
      <VStack spacing={6} align="start">
        <Heading size="lg">Ranking de Jogadores</Heading>
        <Text fontSize="md" color="gray.600">
          Confira os melhores jogadores da temporada.
        </Text>
        <Table variant="striped" colorScheme="blue">
          <Thead>
            <Tr>
              <Th>Jogador</Th>
              <Th>Time</Th>
              <Th isNumeric>Gols</Th>
              <Th isNumeric>Assistências</Th>
            </Tr>
          </Thead>
          <Tbody>
            {ranking.map((player) => (
              <Tr key={player.id}>
                <Td>
                  <HStack spacing={3}>
                    <Avatar size="sm" name={player.name} src={player.avatar} />
                    <Text>{player.name}</Text>
                  </HStack>
                </Td>
                <Td>{player.team}</Td>
                <Td isNumeric>{player.goals}</Td>
                <Td isNumeric>{player.assists}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
};

export default Ranking;
