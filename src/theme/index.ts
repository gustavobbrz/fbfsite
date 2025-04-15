import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#fff9e6',
      100: '#ffefc0',
      200: '#ffe599',
      300: '#ffdb73',
      400: '#ffd14d',
      500: '#ffc726', // Amarelo principal
      600: '#e6b322',
      700: '#cc9f1e',
      800: '#b38b1a',
      900: '#997716',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900', // Fundo preto escuro
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'gray.800',
          color: 'white',
        },
      },
    },
    Box: {
      baseStyle: {
        bg: 'gray.800',
      },
    },
  },
});

export default theme; 