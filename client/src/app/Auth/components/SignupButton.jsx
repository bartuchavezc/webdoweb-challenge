import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export function SignupButton(){
    return (
        <Box p="1rem" color="#949494" fontSize="20px">
            <NavLink exact activeStyle={{borderBottom: "1px solid #949494"}} to='/signup'>Sign up</NavLink>
        </Box>
    )
}