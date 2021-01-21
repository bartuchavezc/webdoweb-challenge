import React from "react";
import { Box, Flex } from "@chakra-ui/react";

export function DomainItem(props) {
  return (
    <Flex justify="center" fontSize="28px" color="#868686">
      <Box pr="1rem"> {props.domain} </Box>
      <Box pl="1rem"> {props.views} views </Box>
    </Flex>
  );
}
