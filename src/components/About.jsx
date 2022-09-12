import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    // <Container maxW={"900px"} height={"80vh"}>
    <VStack
      spacing="5"
      maxW={"900px"}
      m="auto"
      height={"100vh"}
      justifyContent="center"
      alignItems="center"
      px="8"
    >
      <Heading>About me</Heading>
      <Text fontSize={"20px"}>
        Enthusiastic web developer with ability to learn and collaborate in rapidly changing
        environments. Worked through 1000+ hours of bootcamp structure, learning JavaScript,
        ReactJS, NodeJS, MongoDB and Data Structures & Algorithms. Passionate to apply coding skills
        to develop quality solutions.
      </Text>
    </VStack>
    // </Container>
  );
};

export default About;
