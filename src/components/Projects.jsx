import { Box, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <VStack maxW="1000px" m="auto" id="projects" p="4" gap={"6"}>
      <Heading mt={{ base: "16", md: "0" }}>Projects</Heading>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </VStack>
  );
};

export default Projects;
