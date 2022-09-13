import React from "react";

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
import Logo from "../../src/logo.svg";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineDownload } from "react-icons/ai";

const navItem = [
  { path: "#about", name: "About" },
  { path: "Skills", name: "Skills" },
  { path: "Projects", name: "Projects" },
  { path: "Contact", name: "Contact" },
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
        bg="black"
        color="white"
      >
        <Flex justifyContent="space-between" mx="auto">
          <chakra.a href="/" title="Sanjay Kumar Gupta" display="flex" alignItems="center">
            <Avatar size="sm" name="Sanjay Gupta" src={Logo} />
          </chakra.a>
          <HStack spacing={3} display={{ base: "none", md: "flex" }} gap="6">
            {navItem.map((item) => {
              return (
                <Link key={item.path} fontSize="18">
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
              bg="black"
              color="white"
            >
              {navItem.map((item) => {
                return (
                  <Link fontSize="xl" fontWeight="500" key={item.path}>
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
