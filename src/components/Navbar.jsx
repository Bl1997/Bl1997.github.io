
import {
  Box,
  Flex,
  Avatar,
  HStack,

  IconButton,
  Button,
  Menu,
  MenuButton,
  
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Link,
 
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import Resume from '../Pages/Resume';



const Links = ['About','Skills','Projects', 'Experience',];

const NavLink = ({ children }) => (
  <Link
    style={{ cursor: "pointer" }}
   
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("#F86515"),
    }}
 
    to={children}
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
   
   
  >
    {children}
  </Link>
);

export default function Navbar() {
  console.log(Links)

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRes=()=>{

  }
  

  return (
    <>
      <Box bg={useColorModeValue("#232041")} borderBottom="1px solid gray" color="white" px={6} fontSize="xl" fontWeight={"semibold"} position="fixed" width="100%" overflow={"hidden"}  >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontSize={"larger"} fontWeight="bold">
            <Heading size={"lg"}>
                <Link
                  style={{ cursor: "pointer" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("#F86515"),
                  }}
                 
                  to={"About"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  color={"white"}
                 >
                  <a href="/About"> Bihari</a>
                </Link>
              </Heading>
            </Box>
            <HStack
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              {Links.map((link) => (
                
                <NavLink
               
                key={link}>{link}</NavLink>
              ))}
                       </div >
            </HStack>
          </HStack>
          <Flex alignItems={'center'} gap="20px">
   
          <Button
             fontWeight="semibold" fontSize={"large"}
            >
              <Link
                style={{ cursor: "pointer" }}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("#F86515"),
                }}
             
                to={"Contact"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              
              >
            Contact
               
              </Link>

            </Button>

            <Button onClick={handleRes} fontWeight="semibold" fontSize={"larger"} ><Resume/></Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar width={"60px"}
                  size={'sm'}
                  src={
                    'https://avatars.githubusercontent.com/u/107970081?v=4'
                  }
                />
              </MenuButton>
              
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}></Box>
    </>
  );
}