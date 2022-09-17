import { Box, Flex, Heading, HStack, Icon, VStack } from "@chakra-ui/react";
import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";

const Contact = () => {
  return (
    <VStack id="contact">
      <Heading>Let's get in touch</Heading>
      <Flex>
        <Box>
          <Heading>
            <Icon as={MdMarkEmailUnread} /> Email : Sanjay.g.258@gmail.com
          </Heading>
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
