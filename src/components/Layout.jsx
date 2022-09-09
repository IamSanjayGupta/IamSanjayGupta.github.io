import { Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Layout = () => {
  return (
    <>
      <Grid
        templateAreas={[
          `"n n n n"
             "w w w w"                 
            "c c c c"`,
          null,
          `"c c c n"
            "c c c n"
            "w w w n"
          `,
        ]}
        h="100vh"
        color={"white"}
        fontSize="28"
        fontWeight="800"
      >
        <GridItem pl="2" bg="navy" area={"n"}>
          <Center height={"100%"}>NAV</Center>
        </GridItem>
        <GridItem pl="2" bg="orange" area={"c"}>
          <Center height={"100%"}>CONTENT</Center>
        </GridItem>
        <GridItem pl="2" bg="red" area={"w"}>
          <Center height={"100%"}>WIDGET</Center>
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
