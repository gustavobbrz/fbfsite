import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="xl" mb={4}>
            Oops! Algo deu errado
          </Heading>
          <Text mb={4}>{this.state.error?.message}</Text>
          <Button colorScheme="blue" onClick={this.handleReset}>
            Tentar novamente
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}
