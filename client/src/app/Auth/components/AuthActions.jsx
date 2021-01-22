import { Box, Center } from "@chakra-ui/react";
import { LoginButton } from "./LoginButton";
import { SignupButton } from "./SignupButton";
import { LogoutButton } from "./LogoutButton";
import { HomeButton } from "./HomeButton";
import { isLogged } from "../services/LoginValidation";

export function AuthActions() {
  return isLogged() ? (
    <Center>
      <Box m="0 1rem 0 1rem">
        <LogoutButton></LogoutButton>
      </Box>
      <Box m="0 1rem 0 1rem">
        <HomeButton></HomeButton>
      </Box>
    </Center>
  ) : (
    <Center>
      <Box m="0 1rem 0 1rem">
        <LoginButton></LoginButton>
      </Box>
      <Box m="0 1rem 0 1rem">
        <HomeButton></HomeButton>
      </Box>
      <Box m="0 1rem 0 1rem">
        <SignupButton></SignupButton>
      </Box>
    </Center>
  );
}
