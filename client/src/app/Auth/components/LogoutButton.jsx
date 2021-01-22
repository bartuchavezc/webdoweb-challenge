import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export function LogoutButton() {
  return (
    <Box p="1rem" color="#949494" fontSize="20px">
      <NavLink style={{cursor: "pointer"}} to='/logout'>Log out</NavLink>
    </Box>
  );
}
