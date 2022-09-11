import { Avatar, Center, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Container maxW={"900px"} height={"80vh"}>
      <VStack align={"center"} spacing="5">
        <Heading>My Tools & Skills </Heading>
        <VStack shadow={"md"}>
          <Image src="../../assets/react.svg" size={"xl"} width="100px" />
          <Heading>React</Heading>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Skills;
