import { Avatar, Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Box py="10">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Avatar
          width="300px"
          height="300px"
          name="Segun Adebayo"
          src="https://avatars.githubusercontent.com/u/80489885?v=4"
        />
        <VStack alignItems={"flex-start"} spacing="5" w={{ base: "90%", md: "60%" }}>
          <Heading>Hi👋,</Heading>
          <Heading>I'm Sanjay Kumar Gupta</Heading>
          <Heading>
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
    </Box>
  );
};

export default Home;
