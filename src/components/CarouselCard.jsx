import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import gitLogo from "../assets/git.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselCard = () => {
  return (
    <Carousel>
      <Box>
        <Image src={gitLogo} />
        {/* <Text className="legend">Legend 1</Text> */}
      </Box>
      <Box>
        <Image src={gitLogo} />
      </Box>
      <Box>
        <Image src={gitLogo} />
      </Box>
    </Carousel>
  );
};

export default CarouselCard;
