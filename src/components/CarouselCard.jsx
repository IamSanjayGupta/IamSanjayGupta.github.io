import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import gitLogo from "../assets/git.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselCard = () => {
  return (
    <Center>
      <Carousel infiniteLoop={true} showIndicators={false} showStatus={false}>
        <Box>
          <Image width={"150px"} height={"150px"} src={gitLogo} />
          <Button>Github</Button>
          <Button>Live</Button>
        </Box>
        <Box>
          <Image width={"150px"} height={"150px"} src={gitLogo} />
          <Button>Github</Button>
          <Button>Live</Button>
        </Box>
        <Box>
          <Image width={"150px"} height={"150px"} src={gitLogo} />
          <Button>Github</Button>
          <Button>Live</Button>
        </Box>
      </Carousel>
    </Center>
  );
};

export default CarouselCard;
