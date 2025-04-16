import { Card, CardBody, Icon, Heading, Text } from "@chakra-ui/react";
import type { FeatureProps } from "../../../types"; // Use central types export

export const FeatureCard = ({ icon, title, description }: FeatureProps) => (
  <Card
    _hover={{ transform: "translateY(-5px)", shadow: "md" }}
    transition="all 0.2s"
    textAlign="center"
  >
    <CardBody p={8}>
      <Icon as={icon} boxSize={10} color="brand.500" mb={4} />
      <Heading size="md" mb={4}>
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </CardBody>
  </Card>
);

// Default export for potential lazy loading or easier imports
export default FeatureCard;
