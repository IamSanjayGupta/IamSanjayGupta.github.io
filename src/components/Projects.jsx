import { Box, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <VStack border={"1px solid red"} maxW="800px" m="auto" height={"90vh"}>
      <Heading my="5">Projects</Heading>
      <ProjectCard />
    </VStack>
  );
};

export default Projects;
