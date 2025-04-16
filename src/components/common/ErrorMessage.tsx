import { Alert, AlertIcon, AlertTitle, AlertDescription, VStack, Button } from '@chakra-ui/react';

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({
  title = 'Erro',
  message,
  onRetry,
}: ErrorMessageProps) {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      borderRadius="md"
    >
      <VStack spacing={4}>
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          {title}
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          {message}
        </AlertDescription>
        {onRetry && (
          <Button
            onClick={onRetry}
            colorScheme="red"
            size="sm"
            mt={4}
          >
            Tentar novamente
          </Button>
        )}
      </VStack>
    </Alert>
  );
} 