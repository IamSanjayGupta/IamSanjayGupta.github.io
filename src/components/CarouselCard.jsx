import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import gitLogo from "../assets/git.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import indeed1 from "../assets/indeed/1.png";
import indeed2 from "../assets/indeed/2.png";
import indeed3 from "../assets/indeed/3.png";
import indeed4 from "../assets/indeed/4.png";

const CarouselCard = () => {
  return (
    <Carousel
      interval={1500}
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
    >
      <Box>
        <Image width={"150px"} height={"170px"} src={indeed1} />
      </Box>
      <Box>
        <Image width={"150px"} height={"170px"} src={indeed2} />
      </Box>
      <Box>
        <Image width={"150px"} height={"170px"} src={indeed3} />
      </Box>
    </Carousel>
  );
};

export default CarouselCard;
