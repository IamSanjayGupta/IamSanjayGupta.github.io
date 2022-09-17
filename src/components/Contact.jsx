import { Box, Flex, Heading, HStack, Icon, IconButton, VStack } from "@chakra-ui/react";
import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <VStack id="contact">
      <Heading>Let's get in touch</Heading>
      <Flex>
        <Box>
          <Link>
            <IconButton
              colorScheme="teal"
              aria-label="Call Segun"
              size="lg"
              icon={<MdMarkEmailUnread />}
            />
          </Link>

          <Heading>Tel : Sanjay.g.258@gmail.com</Heading>
          <Heading>Email : Sanjay.g.258@gmail.com</Heading>
          <Heading>Email : Sanjay.g.258@gmail.com</Heading>
        </Box>
        <Box></Box>
      </Flex>
    </VStack>
  );
};

export default Contact;
