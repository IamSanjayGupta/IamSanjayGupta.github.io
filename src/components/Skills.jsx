import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

import { skillData } from "../utils/skills";

const Skills = () => {
  let skills = skillData.map((item) => {
    return (
      <VStack
        key={item.name}
        shadow={"md"}
        py="6"
        px="3"
        width="120px"
        height={"120px"}
        justifyContent="flex-end"
        boxShadow="0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
        rounded={"lg"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
        }}
        bg="white"
        color="black"
        id="skills"
      >
        <Image src={item.icon} size={"xl"} height="80%" />
        <Heading size={"sm"}>{item.name}</Heading>
      </VStack>
    );
  });

  return (
    <VStack
      p="8"
      height={{ base: "100%", md: "90vh" }}
      alignItems={"center"}
      bgGradient="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);"
      color="white"
    >
      <Heading my={6}>My Tools & Skills </Heading>
      <HStack flexWrap={"wrap"} gap="3" maxW={"850px"} justifyContent="center">
        {skills}
      </HStack>
    </VStack>
  );
};

export default Skills;
