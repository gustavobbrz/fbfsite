import {
  Box,
  SimpleGrid,
  Container,
  useBreakpointValue,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { features } from "../data/homeFeatures";
import HeroSection from "../components/features/home/HeroSection";
import { FeatureCard } from "../components";

const Home = () => {
  const columns = useBreakpointValue({ base: 1, md: 3 }); // Responsividade para colunas

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <VStack spacing={8} mt={8} align="center">
        <Heading size="lg">Bem-vindo ao Campeonato de Haxball</Heading>
        <Text fontSize="md" textAlign="center" maxW="600px">
          Participe do nosso servidor no Discord e acompanhe as competições mais
          emocionantes de Haxball. Veja os rankings, estatísticas e muito mais!
        </Text>
        <HStack spacing={4}>
          <Button as={Link} to="/competitions" colorScheme="brand" size="lg">
            Ver Competições
          </Button>
          <Button as={Link} to="/ranking" variant="outline" size="lg">
            Ranking
          </Button>
        </HStack>
      </VStack>

      {/* Features Section */}
      <Container maxW="container.xl" py={8}>
        <SimpleGrid columns={columns} spacing={6} mb={12}>
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home;
