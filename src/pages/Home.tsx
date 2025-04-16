import {
  Box,
  SimpleGrid,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { features } from "../data/homeFeatures"; // Import the data
import { HeroSection, FeatureCard } from "../components"; // Use central components export

const Home = () => {
  const columns = useBreakpointValue({ base: 1, md: 3 });

  return (
    <Box>
      <HeroSection />

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
