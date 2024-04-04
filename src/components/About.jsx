import { Flex, Heading, Image, Text, VStack, Spinner } from "@chakra-ui/react";
import React from "react";

import AboutMe from "../assets/about_me_image.png";

const About = () => {
  return (
    <VStack
      spacing="5"
      maxW={"1000px"}
      m="auto"
      height={{ base: "100%", md: "90vh" }}
      justifyContent="center"
      alignItems="center"
      p="8"
      id="about"
    >
      <Heading>About Me</Heading>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"8px"}
      >
        <Image w={{ base: "50%", md: "40%" }} src={AboutMe} fallBack={<Spinner />} />
        <Text fontSize={"20px"}>
          Enthusiastic web developer with ability to learn and collaborate in rapidly changing
          environments. With a year plus experience as Full Stack Developer and worked through 1000+
          hours of bootcamp structure.
          <br />
          I have hands-one experience on building & deploying web application and developing
          solution using range of technologies.
          <br />
          Let's connect and explore how I can contribute to your team's success with my passion for
          coding and dedication to quality craftsmanship.
        </Text>
      </Flex>
    </VStack>
  );
};

export default About;
