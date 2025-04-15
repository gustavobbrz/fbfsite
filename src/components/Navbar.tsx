import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Divider,
  Badge,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaFutbol, FaTrophy, FaNewspaper, FaUsers, FaCalendarAlt, FaBell } from 'react-icons/fa';

const NavLink = ({ children, to, badge }: { children: React.ReactNode; to: string; badge?: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <RouterLink to={to}>
      <HStack
        px={3}
        py={2}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('brand.50', 'brand.900'),
        }}
        color={isActive ? 'brand.500' : 'gray.600'}
        fontWeight={isActive ? 'bold' : 'normal'}
      >
        <Text>{children}</Text>
        {badge && (
          <Badge colorScheme="red" variant="solid" fontSize="xs">
            {badge}
          </Badge>
        )}
      </HStack>
    </RouterLink>
  );
};

const menuItems = [
  {
    label: 'Competições',
    icon: FaTrophy,
    items: [
      { label: 'Campeonato Estadual', to: '/competitions/state', badge: 'Ao Vivo' },
      { label: 'Copa do Estado', to: '/competitions/cup' },
      { label: 'Tabelas', to: '/competitions/tables' },
    ],
  },
  {
    label: 'Times',
    icon: FaFutbol,
    to: '/teams',
  },
  {
    label: 'Notícias',
    icon: FaNewspaper,
    to: '/news',
  },
  {
    label: 'Calendário',
    icon: FaCalendarAlt,
    to: '/calendar',
  },
  {
    label: 'Sócio-Torcedor',
    icon: FaUsers,
    to: '/membership',
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bgColor}
      px={4}
      position="sticky"
      top={0}
      zIndex={100}
      borderBottom="1px"
      borderColor={borderColor}
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={<HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            variant="ghost"
            colorScheme="brand"
          />
          
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image
                src="/logo.png"
                alt="FBF Logo"
                h="40px"
                objectFit="contain"
              />
            </Box>
            
            <HStack as={'nav'} spacing={1} display={{ base: 'none', md: 'flex' }}>
              {menuItems.map((item) => (
                item.items ? (
                  <Menu key={item.label}>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      variant="ghost"
                      colorScheme="brand"
                      size="sm"
                    >
                      {item.label}
                    </MenuButton>
                    <MenuList>
                      {item.items.map((subItem) => (
                        <MenuItem 
                          key={subItem.label} 
                          as={RouterLink} 
                          to={subItem.to}
                          icon={subItem.badge ? <FaBell color="red" /> : undefined}
                        >
                          <HStack justify="space-between" width="100%">
                            <Text>{subItem.label}</Text>
                            {subItem.badge && (
                              <Badge colorScheme="red" variant="solid" fontSize="xs">
                                {subItem.badge}
                              </Badge>
                            )}
                          </HStack>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
                  <NavLink key={item.label} to={item.to || '#'}>
                    {item.label}
                  </NavLink>
                )
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={'center'} gap={2}>
            <Button
              as={RouterLink}
              to="/login"
              variant={'solid'}
              colorScheme={'brand'}
              size={'sm'}
            >
              Entrar
            </Button>
            <Button
              as={RouterLink}
              to="/register"
              variant={'outline'}
              colorScheme={'brand'}
              size={'sm'}
            >
              Cadastrar
            </Button>
          </Flex>
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Image src="/logo.png" alt="FBF Logo" h="40px" objectFit="contain" />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {menuItems.map((item) => (
                <Box key={item.label}>
                  {item.items ? (
                    <>
                      <Text fontWeight="bold" mb={2}>{item.label}</Text>
                      <VStack align="stretch" pl={4}>
                        {item.items.map((subItem) => (
                          <NavLink 
                            key={subItem.label} 
                            to={subItem.to}
                            badge={subItem.badge}
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </VStack>
                    </>
                  ) : (
                    <NavLink to={item.to || '#'}>{item.label}</NavLink>
                  )}
                  <Divider my={4} />
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar; 