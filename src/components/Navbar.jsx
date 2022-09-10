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
  CloseButton,
  Avatar,
  Link,
} from "@chakra-ui/react";
import Logo from "../../src/logo.svg";

import { AiOutlineMenu, AiFillHome, AiOutlineInbox, AiOutlineDownload } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

export default function App() {
  const mobileNav = useDisclosure();

  return (
    <>
      <chakra.header w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
        <Flex justifyContent="space-between" mx="auto">
          <chakra.a href="/" title="Sanjay Kumar Gupta" display="flex" alignItems="center">
            <Avatar size="sm" name="Dan Abrahmov" src={Logo} />
          </chakra.a>
          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Skills</Button>
            <Button variant="ghost">Projects</Button>
            <Button variant="ghost">Contact</Button>
          </HStack>
          <Link
            display={{ base: "none", md: "flex" }}
            target="_blank"
            href="https://drive.google.com/file/d/1VAP9hrHqw_VtIAMtJIYulbPVHb8yqyye/view?usp=sharing"
            download="Sanjay-Gupta-Resume"
            _hover={{ textDecoration: "none" }}
          >
            <Button variant="ghost" leftIcon={<AiOutlineDownload />}>
              Downlaod Resume
            </Button>
          </Link>
          <Box display={{ base: "flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              fontSize="20px"
              color="gray.800"
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              m={2}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                justifySelf="self-start"
                onClick={mobileNav.onClose}
              />
              <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                About
              </Button>
              <Button w="full" variant="ghost" leftIcon={<AiOutlineInbox />}>
                Skills
              </Button>
              <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
                Projects
              </Button>
              <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
                Contact
              </Button>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1VAP9hrHqw_VtIAMtJIYulbPVHb8yqyye/view?usp=sharing"
                download="Sanjay-Gupta-Resume"
                _hover={{ textDecoration: "none" }}
              >
                <Button variant="ghost" leftIcon={<AiOutlineDownload />}>
                  Downlaod Resume
                </Button>
              </Link>
            </VStack>
          </Box>
        </Flex>
      </chakra.header>
    </>
  );
}
