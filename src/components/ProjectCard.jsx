import { Box, Flex, Heading, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { GrGithub, GrView } from "react-icons/gr";
import CarouselCard from "./CarouselCard";

const ProjectCard = () => {
  return (
    <Flex
      alignItems="center"
      height={{ base: "100%", md: "250px" }}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      rounded={"lg"}
      flexDirection={{ base: "column-reverse", md: "row" }}
      bg="#7a94b4"
    >
      <VStack width={{ base: "100%", md: "50%" }} p="2" mt="-20px">
        <Heading>Indeed - Clone</Heading>
        <Text>
          Indeed is an employment website for job listings. This clone has job search, filteration,
          pagination, view job, apply job and many more features. Login and signup required email
          verification. The password store in the database is AES encrypted.
        </Text>
        <Heading size="sm">
          Tech Stack: <span>ReactJS, Chakra-UI</span>
        </Heading>
        <HStack gap="4">
          <IconButton aria-label="Go to website" icon={<GrView />} />
          <IconButton aria-label="Show Code" icon={<GrGithub />} />
        </HStack>
      </VStack>
      <Box width={{ base: "100%", md: "50%" }} mt={{ base: "0", md: "40px" }}>
        <CarouselCard />
      </Box>
    </Flex>
  );
};

export default ProjectCard;
