import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  Badge,
  Icon,
  Flex,
  Skeleton,
  VStack,
} from "@chakra-ui/react";
import { FaTrophy, FaCalendar, FaUsers } from "react-icons/fa";
import type { Competition } from "../../../types"; // Use central types export

export const CompetitionCard = ({
  competition,
}: {
  competition: Competition;
}) => {
  const statusConfig = {
    active: { color: "green", text: "Em Andamento" },
    upcoming: { color: "yellow", text: "Em Breve" },
    finished: { color: "gray", text: "Finalizado" },
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s"
      _hover={{ transform: "translateY(-4px)", shadow: "md" }}
      bg="white"
      _dark={{ bg: "gray.700" }}
    >
      <Box position="relative" h="200px">
        <Image
          src={competition.image}
          alt={competition.name}
          h="full"
          w="full"
          objectFit="cover"
          fallback={<Skeleton h="full" />}
        />
        <Badge
          position="absolute"
          top={4}
          right={4}
          colorScheme={statusConfig[competition.status].color}
          px={3}
          py={1}
          borderRadius="full"
        >
          {statusConfig[competition.status].text}
        </Badge>
      </Box>

      <VStack p={6} align="stretch" spacing={4}>
        <Heading size="md" color="brand.500">
          {competition.name}
        </Heading>

        <Text noOfLines={2} color="gray.600" _dark={{ color: "gray.300" }}>
          {competition.description}
        </Text>

        <Flex gap={4} color="gray.500" flexWrap="wrap">
          {competition.startDate && (
            <HStack spacing={1}>
              <Icon as={FaCalendar} />
              <Text fontSize="sm">
                {new Date(competition.startDate).toLocaleDateString("pt-BR")}
              </Text>
            </HStack>
          )}
          {competition.teamsCount && (
            <HStack spacing={1}>
              <Icon as={FaUsers} />
              <Text fontSize="sm">{competition.teamsCount} times</Text>
            </HStack>
          )}
        </Flex>

        <Button
          as={Link}
          to={competition.route}
          colorScheme="brand"
          leftIcon={<FaTrophy />}
          size="md"
          mt="auto"
        >
          Ver Detalhes
        </Button>
      </VStack>
    </Box>
  );
};

// Default export for potential lazy loading or easier imports
export default CompetitionCard;
