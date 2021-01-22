import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export function HomeButton(){
    return(
        <Box p="1rem" color="#949494" fontSize="20px">
            <NavLink exact to='/' activeStyle={{borderBottom: "1px solid #949494"}}>Home</NavLink>
        </Box>
    )
}