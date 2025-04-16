import { Spinner, Center, Text, VStack } from '@chakra-ui/react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function LoadingSpinner({ message = 'Carregando...', size = 'xl' }: LoadingSpinnerProps) {
  return (
    <Center minH="200px">
      <VStack spacing={4}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size={size}
        />
        {message && <Text color="gray.600" _dark={{ color: 'gray.400' }}>{message}</Text>}
      </VStack>
    </Center>
  );
} 