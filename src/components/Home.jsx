import { Avatar, Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
import pofilePic from "../assets/profile.png";

const Home = () => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="flex-end"
      gap="5%"
      height={"90vh"}
      bg="black"
      color="white"
      id="about"
    >
      <Avatar width="300px" height="300px" name="Sanjay Gupta" src={pofilePic} />
      <VStack alignItems={"flex-start"} spacing="5" w={{ base: "90%", md: "60%" }}>
        <Heading>Hi👋,</Heading>
        <Heading>I'm Sanjay Kumar Gupta</Heading>
        <Heading pb={6}>
          <Typewriter
            options={{
              strings: ["I'm Full Stack Web Developer.", "Writing clean & simple code."],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
            }}
          />
        </Heading>
      </VStack>
    </Flex>
  );
};

export default Home;
