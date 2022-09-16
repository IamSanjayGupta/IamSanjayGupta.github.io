import React from "react";
import "../index.css";
import {
  chakra,
  Box,
  Flex,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  Avatar,
  Link,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineDownload } from "react-icons/ai";
import { Link as ReachLink } from "react-scroll";

const navItem = [
  { path: "home", name: "Home" },
  { path: "about", name: "About" },
  { path: "skills", name: "Skills" },
  { path: "projects", name: "Projects" },
  { path: "contact", name: "Contact" },
];

const secondryColor = "#2442d7";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <chakra.header
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        pos={"sticky"}
        top="0"
        zIndex={10}
        bgGradient="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);"
        // bg="black"
        color="white"
      >
        <Flex justifyContent="space-between" mx="auto">
          <chakra.a href="/" title="Sanjay Kumar Gupta" display="flex" alignItems="center">
            <Avatar
              size="sm"
              name="Sanjay Gupta"
              src="https://img.freepik.com/premium-vector/hexagonal-letter-s-logo-icon_9880-1.jpg"
              _hover={{ transform: "rotate(90deg)" }}
            />
          </chakra.a>
          <HStack spacing={3} display={{ base: "none", md: "flex" }} gap="6">
            {navItem.map((item, i) => {
              return (
                <Link
                  as={ReachLink}
                  key={item.path}
                  activeClass={"active"}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={item.path == "skills" ? -180 : -60}
                  duration={700}
                  fontSize="18"
                  _active={{ color: "#0078ff" }}
                  _hover={{ color: "blue", color: "#0078ff" }}
                >
                  {item.name}
                </Link>
              );
            })}
          </HStack>
          <Link
            display={{ base: "none", md: "flex" }}
            target="_blank"
            href="https://drive.google.com/file/d/1VAP9hrHqw_VtIAMtJIYulbPVHb8yqyye/view?usp=sharing"
            download="Sanjay-Gupta-Resume"
            _hover={{ textDecoration: "none" }}
          >
            <Button variant="solid" leftIcon={<AiOutlineDownload />} colorScheme="messenger">
              Download Resume
            </Button>
          </Link>
          <Box display={{ base: "flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              fontSize="20px"
              colorScheme={"blackAlpha"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={isOpen ? onClose : onOpen}
            />
            <VStack
              pos="absolute"
              left={0}
              right={0}
              top={16}
              display={isOpen ? "flex" : "none"}
              pb="6"
              rounded="sm"
              shadow="sm"
              bgGradient="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);"
              // bg="black"
              color="white"
            >
              {navItem.map((item) => {
                return (
                  <Link
                    fontSize="xl"
                    fontWeight="500"
                    key={item.path}
                    as={ReachLink}
                    activeClass={"active"}
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={item.path == "skills" ? -180 : -60}
                    duration={700}
                    onClick={isOpen ? onClose : onOpen}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1VAP9hrHqw_VtIAMtJIYulbPVHb8yqyye/view?usp=sharing"
                download="Sanjay-Gupta-Resume"
                _hover={{ textDecoration: "none" }}
              >
                <Button variant="solid" leftIcon={<AiOutlineDownload />} colorScheme="messenger">
                  Download Resume
                </Button>
              </Link>
            </VStack>
          </Box>
        </Flex>
      </chakra.header>
    </>
  );
}
