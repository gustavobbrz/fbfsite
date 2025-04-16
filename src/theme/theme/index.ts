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
      50: "#e3f2f9",
      100: "#c5e4f3",
      200: "#a2d4ec",
      300: "#7ac1e4",
      400: "#47a9da",
      500: "#0088cc",
      600: "#007ab8",
      700: "#006ba1",
      800: "#005885",
      900: "#003f5e",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "gray.900")(props),
        color: mode("gray.800", "whiteAlpha.900")(props),
        _dark: {
          bg: "gray.900",
          color: "gray.100",
        },
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
