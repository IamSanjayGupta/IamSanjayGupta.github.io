import { Box, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <VStack maxW="800px" m="auto" id="projects">
      <Heading my="5">Projects</Heading>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </VStack>
  );
};

export default Projects;
