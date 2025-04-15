import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      primary: '#1B5E20', // Verde escuro do site de referência
      secondary: '#FFD700', // Dourado do logo do campeonato
      text: '#333333',
      background: '#FFFFFF',
    },
  },
  fonts: {
    heading: 'Roboto, system-ui, sans-serif',
    body: 'Roboto, system-ui, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'brand.text',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        solid: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'brand.primary',
            opacity: 0.9,
          },
        },
      },
    },
  },
});

export default theme; 