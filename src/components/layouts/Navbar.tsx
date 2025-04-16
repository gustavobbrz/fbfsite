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
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { FaTrophy, FaCalendar, FaUsers, FaInfoCircle } from 'react-icons/fa';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const bgColor = useColorModeValue('gray.900', 'gray.900');
  const contentBg = useColorModeValue('gray.800', 'gray.800');
  const borderColor = useColorModeValue('brand.400', 'brand.400');
  const textColor = useColorModeValue('gray.100', 'gray.100');
  const hoverBg = useColorModeValue('brand.900', 'brand.800');
  const accentColor = 'brand.400';

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
              <Image h="40px" src="/logo.png" alt="FBF Logo" />
              <Text fontSize="xl" fontWeight="bold" color={accentColor}>
                FBF
              </Text>
            </HStack>
          </RouterLink>

          {/* Desktop Navigation */}
          <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
            {/* Competições Dropdown */}
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
                leftIcon={<FaTrophy color={textColor} />}
                color={textColor}
                _hover={{ bg: hoverBg }}
                _active={{ bg: hoverBg }}
              >
                Competições
              </MenuButton>
              <MenuList 
                bg={contentBg} 
                borderColor={borderColor}
                minW="200px"
              >
                <MenuItem 
                  as={RouterLink} 
                  to="/competitions/principal" 
                  icon={<FaTrophy />}
                  _hover={{ bg: hoverBg }}
                  bg={contentBg}
                  color={textColor}
                >
                  FBF Principal
                </MenuItem>
                <MenuItem 
                  as={RouterLink} 
                  to="/competitions/copa" 
                  icon={<FaTrophy />}
                  _hover={{ bg: hoverBg }}
                  bg={contentBg}
                  color={textColor}
                >
                  Copa FBF
                </MenuItem>
                <MenuItem 
                  as={RouterLink} 
                  to="/competitions/semanal" 
                  icon={<FaTrophy />}
                  _hover={{ bg: hoverBg }}
                  bg={contentBg}
                  color={textColor}
                >
                  FBF Semanal
                </MenuItem>
                <Divider borderColor={borderColor} />
                <MenuItem 
                  as={RouterLink} 
                  to="/competitions" 
                  _hover={{ bg: hoverBg }}
                  bg={contentBg}
                  color={textColor}
                >
                  Ver Todas
                </MenuItem>
              </MenuList>
            </Menu>

            {/* Agenda Dropdown */}
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
                leftIcon={<FaCalendar color={textColor} />}
                color={textColor}
                _hover={{ bg: hoverBg }}
                _active={{ bg: hoverBg }}
              >
                Agenda
              </MenuButton>
              <MenuList bg={contentBg} borderColor={borderColor}>
                <MenuItem 
                  as={RouterLink} 
                  to="/calendar" 
                  icon={<FaCalendar />}
                  _hover={{ bg: hoverBg }}
                  bg={contentBg}
                  color={textColor}
                >
                  Calendário
                </MenuItem>
                <MenuItem 
                  as={RouterLink} 
                  to="/schedule" 
                  icon={<FaCalendar />}
                  _hover={{ bg: hoverBg }}
                  bg={contentBg}
                  color={textColor}
                >
                  Próximos Jogos
                </MenuItem>
                <MenuItem 
                  as={RouterLink} 
                  to="/results" 
                  icon={<FaCalendar />}
                  _hover={{ bg: hoverBg }}
                  bg={contentBg}
                  color={textColor}
                >
                  Resultados
                </MenuItem>
              </MenuList>
            </Menu>

            {/* Times */}
            <Button
              as={RouterLink}
              to="/teams"
              variant="ghost"
              leftIcon={<FaUsers color={textColor} />}
              color={textColor}
              _hover={{ bg: hoverBg }}
            >
              Times
            </Button>

            {/* Sobre */}
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
                leftIcon={<FaInfoCircle color={textColor} />}
                color={textColor}
                _hover={{ bg: hoverBg }}
                _active={{ bg: hoverBg }}
              >
                Sobre
              </MenuButton>
              <MenuList bg={contentBg} borderColor={borderColor}>
                <MenuItem 
                  as={RouterLink} 
                  to="/about" 
                  icon={<FaInfoCircle />}
                  _hover={{ bg: hoverBg }}
                  bg={contentBg}
                  color={textColor}
                >
                  Sobre a FBF
                </MenuItem>
                <MenuItem 
                  as={RouterLink} 
                  to="/fbf-history" 
                  icon={<FaInfoCircle />}
                  _hover={{ bg: hoverBg }}
                  bg={contentBg}
                  color={textColor}
                >
                  História
                </MenuItem>
                <MenuItem 
                  as={RouterLink} 
                  to="/contact" 
                  icon={<FaInfoCircle />}
                  _hover={{ bg: hoverBg }}
                  bg={contentBg}
                  color={textColor}
                >
                  Contato
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          {/* Auth Buttons */}
          <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
            <Button
              as={RouterLink}
              to="/login"
              variant="ghost"
              color={textColor}
              _hover={{ bg: hoverBg }}
            >
              Entrar
            </Button>
            <Button
              as={RouterLink}
              to="/register"
              colorScheme="brand"
              bg="accent.500"
              _hover={{ bg: 'accent.600' }}
            >
              Cadastrar
            </Button>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
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
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={1}>
              {/* Mobile Menu Items */}
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                  leftIcon={<FaTrophy />}
                  color={textColor}
                  _hover={{ bg: hoverBg }}
                  w="full"
                  justifyContent="flex-start"
                >
                  Competições
                </MenuButton>
                <MenuList bg={contentBg} borderColor={borderColor}>
                  <MenuItem as={RouterLink} to="/competitions/principal" _hover={{ bg: hoverBg }}>
                    FBF Principal
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/competitions/copa" _hover={{ bg: hoverBg }}>
                    Copa FBF
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/competitions/semanal" _hover={{ bg: hoverBg }}>
                    FBF Semanal
                  </MenuItem>
                  <Divider borderColor={borderColor} />
                  <MenuItem as={RouterLink} to="/competitions" _hover={{ bg: hoverBg }}>
                    Ver Todas
                  </MenuItem>
                </MenuList>
              </Menu>

              <Button
                as={RouterLink}
                to="/teams"
                variant="ghost"
                leftIcon={<FaUsers />}
                color={textColor}
                _hover={{ bg: hoverBg }}
                w="full"
                justifyContent="flex-start"
              >
                Times
              </Button>

              <Button
                as={RouterLink}
                to="/login"
                variant="ghost"
                color={textColor}
                _hover={{ bg: hoverBg }}
                w="full"
                justifyContent="flex-start"
              >
                Entrar
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;