import {
  Box,
  Flex,
  Button,
  Stack,
  useDisclosure,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Image,
  HStack,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import {
  FaTrophy,
  FaCalendar,
  FaUsers,
  FaInfoCircle,
  FaLandmark,
  FaMoon,
  FaSun,
  FaChartBar,
} from "react-icons/fa";

// Importando o logo
import fbflogo from "../../assets/images/fbflogo.svg";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.900", "gray.900");
  const contentBg = useColorModeValue("gray.800", "gray.800");
  const borderColor = useColorModeValue("brand.400", "brand.400");
  const textColor = useColorModeValue("gray.100", "gray.100");
  const hoverBg = useColorModeValue("brand.900", "brand.800");
  const accentColor = "brand.400";

  const NavButton = ({
    to,
    icon,
    label,
  }: {
    to: string;
    icon: JSX.Element | null;
    label: string;
  }) => (
    <Button
      as={RouterLink}
      to={to}
      variant="ghost"
      leftIcon={icon}
      color={textColor}
      _hover={{ bg: hoverBg }}
    >
      {label}
    </Button>
  );

  const NavMenu = ({
    label,
    icon,
    items,
  }: {
    label: string;
    icon: JSX.Element;
    items: { to: string; label: string }[];
  }) => (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        rightIcon={<ChevronDownIcon />}
        leftIcon={icon}
        color={textColor}
        _hover={{ bg: hoverBg }}
        _active={{ bg: hoverBg }}
      >
        {label}
      </MenuButton>
      <MenuList bg={contentBg} borderColor={borderColor}>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            as={RouterLink}
            to={item.to}
            _hover={{ bg: hoverBg }}
            bg={contentBg}
            color={textColor}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );

  return (
    <Box
      bg={bgColor}
      px={4}
      borderBottom="2px"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex="sticky"
      boxShadow="md"
    >
      <Container maxW="1200px" px={0}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <RouterLink to="/">
            <HStack spacing={3}>
              <Image h="40px" src={fbflogo} alt="FBF Logo" />
              <Text fontSize="xl" fontWeight="bold" color={accentColor}>
                FBF
              </Text>
            </HStack>
          </RouterLink>

          {/* Desktop Navigation */}
          <HStack spacing={2} display={{ base: "none", md: "flex" }}>
            <NavMenu
              label="Competições"
              icon={<FaTrophy />}
              items={[
                { to: "/competitions/principal", label: "FBF Principal" },
                { to: "/competitions/copa", label: "Copa FBF" },
                { to: "/competitions/semanal", label: "FBF Semanal" },
                { to: "/competitions", label: "Ver Todas" },
              ]}
            />
            <NavMenu
              label="Agenda"
              icon={<FaCalendar />}
              items={[
                { to: "/calendar", label: "Calendário" },
                { to: "/schedule", label: "Próximos Jogos" },
                { to: "/results", label: "Resultados" },
              ]}
            />
            <NavButton to="/teams" icon={<FaUsers />} label="Times" />
            <NavButton to="/ranking" icon={<FaChartBar />} label="Ranking" />
            <NavButton
              to="/statistics"
              icon={<FaChartBar />}
              label="Estatísticas"
            />
            <NavMenu
              label="Museu"
              icon={<FaLandmark />}
              items={[
                { to: "/museum/fbf", label: "Museu FBF" },
                { to: "/museum/urun", label: "Museu Urun" },
              ]}
            />
            <NavMenu
              label="Sobre"
              icon={<FaInfoCircle />}
              items={[
                { to: "/about", label: "Sobre a FBF" },
                { to: "/fbf-history", label: "História" },
                { to: "/contact", label: "Contato" },
              ]}
            />
          </HStack>

          {/* Auth Buttons */}
          <HStack spacing={2} display={{ base: "none", md: "flex" }}>
            <NavButton to="/login" icon={null} label="Entrar" />
            <Button
              as={RouterLink}
              to="/register"
              colorScheme="brand"
              bg="accent.500"
              _hover={{ bg: "accent.600" }}
            >
              Cadastrar
            </Button>
            <IconButton
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              aria-label="Toggle theme"
              variant="ghost"
              color={textColor}
              _hover={{ bg: hoverBg }}
            />
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
            color={textColor}
            _hover={{ bg: hoverBg }}
          />
        </Flex>

        {/* Mobile Menu */}
        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={1}>
              <NavMenu
                label="Competições"
                icon={<FaTrophy />}
                items={[
                  { to: "/competitions/principal", label: "FBF Principal" },
                  { to: "/competitions/copa", label: "Copa FBF" },
                  { to: "/competitions/semanal", label: "FBF Semanal" },
                  { to: "/competitions", label: "Ver Todas" },
                ]}
              />
              <NavButton to="/teams" icon={<FaUsers />} label="Times" />
              <NavButton to="/ranking" icon={<FaChartBar />} label="Ranking" />
              <NavButton
                to="/statistics"
                icon={<FaChartBar />}
                label="Estatísticas"
              />
              <NavMenu
                label="Museu"
                icon={<FaLandmark />}
                items={[
                  { to: "/museum/fbf", label: "Museu FBF" },
                  { to: "/museum/urun", label: "Museu Urun" },
                ]}
              />
              <NavButton to="/login" icon={null} label="Entrar" />
              <IconButton
                icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                onClick={toggleColorMode}
                aria-label="Toggle theme"
                variant="ghost"
                color={textColor}
                _hover={{ bg: hoverBg }}
              />
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
