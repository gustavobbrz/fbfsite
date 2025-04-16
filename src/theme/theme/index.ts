import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true, // Agora respeita o sistema operacional
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e", // Verde principal
      600: "#16a34a",
      700: "#15803d", // Verde mais escuro (similar ao seu primary)
      800: "#166534",
      900: "#14532d",
      primary: "#1B5E20", // Mantido para compatibilidade
      secondary: "#FFD700", // Dourado mantido
    },
    accent: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9", // Azul principal
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308", // Amarelo principal
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
    },
  },
  fonts: {
    heading: "Poppins, Inter, sans-serif", // Mais moderna
    body: "Inter, Roboto, sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "gray.900")(props), // Modo claro/escuro automático
        color: mode("gray.800", "whiteAlpha.900")(props),
        fontFeatureSettings: '"kern", "liga", "clig", "calt"',
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
      },
      "::selection": {
        bg: "brand.500",
        color: "white",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
        borderRadius: "lg",
      },
      variants: {
        solid: (props) => ({
          bg: mode("brand.500", "brand.600")(props),
          color: "white",
          _hover: {
            bg: mode("brand.600", "brand.700")(props),
            transform: "translateY(-1px)",
            boxShadow: "md",
          },
          _active: {
            bg: mode("brand.700", "brand.800")(props),
          },
        }),
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.50",
          },
        },
      },
      defaultProps: {
        size: "md",
        variant: "solid",
      },
    },
    Card: {
      baseStyle: (props) => ({
        container: {
          bg: mode("white", "gray.800")(props),
          boxShadow: "sm",
          _hover: {
            boxShadow: "md",
          },
        },
      }),
    },
    Heading: {
      baseStyle: {
        fontWeight: "semibold",
        letterSpacing: "-0.5px",
      },
    },
    Link: {
      baseStyle: (props) => ({
        color: mode("brand.600", "brand.400")(props),
        _hover: {
          textDecoration: "underline",
        },
      }),
    },
    Input: {
      baseStyle: (props) => ({
        field: {
          bg: mode("white", "gray.700")(props),
          _focus: {
            borderColor: "brand.500",
            boxShadow: `0 0 0 1px ${props.theme.colors.brand[500]}`,
          },
        },
      }),
    },
  },
  shadows: {
    outline: "0 0 0 3px rgba(72, 187, 120, 0.4)", // Verde brand
  },
  layerStyles: {
    card: {
      bg: "white",
      boxShadow: "sm",
      borderRadius: "lg",
      p: 4,
    },
    "card-dark": {
      bg: "gray.800",
      boxShadow: "sm",
      borderRadius: "lg",
      p: 4,
    },
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontWeight: "bold",
      lineHeight: "shorter",
    },
    mono: {
      fontFamily: "mono",
      fontSize: "sm",
    },
  },
});

export default theme;
