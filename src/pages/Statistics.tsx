import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { mockApi } from "../utils/api";

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const data = await mockApi.getStatistics();
        setStatistics(data);
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  if (loading) {
    return (
      <Box py={8} px={4} maxW="container.lg" mx="auto" textAlign="center">
        <Spinner size="xl" />
        <Text mt={4}>Carregando estatísticas...</Text>
      </Box>
    );
  }

  return (
    <Box py={8} px={4} maxW="container.lg" mx="auto">
      <VStack spacing={6} align="start">
        <Heading size="lg">Estatísticas da Temporada</Heading>
        <Text fontSize="md" color="gray.600">
          Acompanhe os dados de desempenho ao longo dos meses.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
          <Box h="300px">
            <Heading size="md" mb={4} textAlign="center">
              Gols por Mês
            </Heading>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={statistics}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="goals" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          <Box h="300px">
            <Heading size="md" mb={4} textAlign="center">
              Assistências por Mês
            </Heading>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={statistics}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="assists" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Statistics;
