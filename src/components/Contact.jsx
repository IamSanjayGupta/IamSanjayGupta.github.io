import { Box, Flex, Heading, HStack, Icon, IconButton, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillTelephoneInboundFill, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <VStack id="contact" gap="10">
      <Heading>Let's get in touch</Heading>
      <Flex>
        <HStack gap="8" my="4">
          <Link href="mailto:sanjay.g.258@gmail.com">
            <Icon as={MdMarkEmailUnread} w={12} h={12} color="telegram.800" />
          </Link>
          <Link href="tel:+918237202188">
            <Icon as={BsFillTelephoneInboundFill} w={12} h={12} color="telegram.800" />
          </Link>
          <Link href="https://twitter.com/IamSanjayGupta" target="_blank">
            <Icon as={BsTwitter} w={12} h={12} color="telegram.800" />
          </Link>
          <Link href="https://www.linkedin.com/in/IamSanjayGupta" target="_blank">
            <Icon as={BsLinkedin} w={12} h={12} color="telegram.800" />
          </Link>
          <Link href="https://github.com/IamSanjayGupta" target="_blank">
            <Icon as={BsGithub} w={12} h={12} color="telegram.800" />
          </Link>
        </HStack>
        <Box></Box>
      </Flex>
    </VStack>
  );
};

export default Contact;
