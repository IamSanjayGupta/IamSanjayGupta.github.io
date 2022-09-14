import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import CarouselCard from "./CarouselCard";

const ProjectCard = () => {
  return (
    <Flex alignItems="center" height={"200px"} boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px">
      <VStack width={"55%"}>
        <Heading>Indeed</Heading>
        <Heading>I am in indeed.</Heading>
      </VStack>
      <Box width={"50%"} mt="40px">
        <CarouselCard />
      </Box>
    </Flex>
  );
};

export default ProjectCard;
