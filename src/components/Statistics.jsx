import { Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Statistics = () => {
  return (
    <VStack maxW="1000px" m="auto" id="projects" p="4" gap={"6"}>
      <Heading mt={{ base: "16", md: "0" }}>Statistics</Heading>
      <Image
        src={
          "https://raw.githubusercontent.com/IamSanjayGupta/IamSanjayGupta/main/profile-3d-contrib/profile-night-rainbow.svg"
        }
      />
      <GitHubCalendar username="IamSanjayGupta" />
    </VStack>
  );
};

export default Statistics;
