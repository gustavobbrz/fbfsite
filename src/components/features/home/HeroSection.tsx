import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  Button,
  HStack,
  S,
} from "@chakra-ui/react";

export const HeroSection = () => (
  <Box
    bg="brand.500"
    color="white"
    py={{ base: 12, md: 16 }}
    px={4}
    borderRadius="lg"
    mb={8}
    textAlign="center"
  >
    <Container maxW="container.lg">
      <Stack spacing={6}>
        <Heading as="h1" size="2xl">
          Bem-vindo à FBF
        </Heading>
        <Text fontSize="xl" opacity={0.9}>
          Sua casa do futebol virtual - Onde os campeões são feitos
        </Text>
        <HStack spacing={4} justify="center">
          <Button
            as={Link}
            to="/competitions"
            size="lg"
            colorScheme="whiteAlpha"
          >
            Ver Campeonatos
          </Button>
          <Button
            as={Link}
            to="/schedule"
            size="lg"
            variant="outline"
            color="white"
          >
            Programação
          </Button>
        </HStack>
      </Stack>
    </Container>
  </Box>
);

// Default export for potential lazy loading or easier imports
export default HeroSection;
