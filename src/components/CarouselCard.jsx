import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import gitLogo from "../assets/git.png";
const CarouselCard = () => {
  return (
    <Carousel>
      <Box>
        <Image src={gitLogo} />
        <Text className="legend">Legend 1</Text>
      </Box>
      <Box>
        <Image src={gitLogo} />
        <Text className="legend">Legend 1</Text>
      </Box>
      <Box>
        <Image src={gitLogo} />
        <Text className="legend">Legend 1</Text>
      </Box>
    </Carousel>
  );
};

export default CarouselCard;
