import { Avatar, Center, Container, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ReactLogo from "../assets/react.svg";
import JSLogo from "../assets/javascript.png";
import HTMLLogo from "../assets/html.png";
import mongodb from "../assets/mongodb.png";
import nodejsLogo from "../assets/nodejs.png";
import expressLogo from "../assets/expressjs.png";
import reduxLogo from "../assets/redux.png";
import gitLogo from "../assets/git.png";
import CSSLogo from "../assets/css.png";
import DSALogo from "../assets/dsa.png";

const skillData = [
  { name: "React", icon: ReactLogo },
  { name: "Redux", icon: reduxLogo },
  { name: "JavaScript", icon: JSLogo },
  { name: "expressJS", icon: expressLogo },
  { name: "mongodb", icon: mongodb },
  { name: "nodejs", icon: nodejsLogo },
  { name: "HTML", icon: HTMLLogo },
  { name: "CSS", icon: CSSLogo },
  { name: "Git & Github", icon: gitLogo },
  { name: "DSA", icon: DSALogo },
];
const Skills = () => {
  let skills = skillData.map((item) => {
    return (
      <VStack key={item.name} shadow={"md"} py="6" px="3" width="120px" height={"120px"}>
        <Image src={item.icon} size={"xl"} height="80%" />
        <Heading size={"sm"}>{item.name}</Heading>
      </VStack>
    );
  });

  return (
    <Container maxW={"1000px"} height={"80vh"}>
      <VStack align={"center"} spacing="5">
        <Heading>My Tools & Skills </Heading>
        <HStack flexWrap={"wrap"} gap="3" maxW={"850px"} justifyContent="center">
          {skills}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Skills;
