import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import CarouselCard from "./CarouselCard";

const ProjectCard = () => {
  return (
    <Flex border={"1px solid red"} alignItems="center">
      <VStack width={"55%"}>
        <h1>Indeed</h1>
        <h2>Chakra</h2>
      </VStack>
      <Box width={"40%"}>
        <CarouselCard />
      </Box>
    </Flex>
  );
};

export default ProjectCard;
