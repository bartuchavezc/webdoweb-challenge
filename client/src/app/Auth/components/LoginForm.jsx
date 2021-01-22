import { useReducer } from "react";
import {
  Alert,
  AlertDescription,
  Center,
  Divider,
  Container,
  AlertIcon,
  Box
} from "@chakra-ui/react";

import { CustomInput } from "../../Shared/components/CustomInput";

import { AuthActions } from './AuthActions';

const initialForm = {
  email: {
    label: "Email",
    value: "",
    type: "text",
    placeholder: "Email"
  },
  password: {
    label: "Password",
    value: "",
    type: "password",
    placeholder: "Password"
  }
};

export function formReducer(prevState, { value, key }) {
  const updatedElement = { ...prevState[key] };
  updatedElement.value = value;
  return { ...prevState, [key]: updatedElement };
}

export function LoginForm({ send, err, success }) {
  const [formData, dispatch] = useReducer(formReducer, initialForm);

  const clearAlert = () => {
    setTimeout(() => {
      success = false;
    }, 2000);
  };

  return (
    <Container justify="center" mt="3rem">
      <Box m="3rem 0 2rem 0">
        <h1
          style={{
            margin: "2rem",
            fontSize: "3rem",
            color: "#a7a7a7"
          }}
        >
          Login
        </h1>

        <form>
          {Object.keys(formData).map(key => (
            <Box m="2rem">
              <CustomInput
                changed={({ target: { value } }) => dispatch({ value, key })}
                key={key}
                id={key}
                value={formData[key].value}
                label={formData[key].label}
                type={formData[key].type}
                placeholder={formData[key].placeholder}
              ></CustomInput>
            </Box>
          ))}
          {err && (
            <Box m="0 2rem 0 2rem" key="index">
              <Alert status="error" mt="6px" variant="left-accent">
                <AlertIcon />
                <AlertDescription>{err.message}</AlertDescription>
              </Alert>
            </Box>
          )}
          {success && (
            <Box m="0 2rem 0 2rem" key="index">
              <Alert status="success" mt="6px" variant="left-accent">
                <AlertIcon />
                <AlertDescription>URL tracked success</AlertDescription>
              </Alert>
            </Box>
          )}
          <Center m="2rem">
            <Box
              p="12px 35px"
              // border="2px solid #3f95a6"
              style={{ cursor: "pointer" }}
              bgGradient="linear(to-r, #6de1e3, #6d96e3)"
              boxShadow="lg"
              borderRadius={2}
              color="#fff"
              onClick={() => send(formData)}
            >
              Login
            </Box>
          </Center>
        </form>
      </Box>

      <footer style={{ paddingBottom: "3rem" }}>
        <Center p="3rem">
          <Divider w="100px" />
        </Center>
        <AuthActions></AuthActions>
      </footer>
    </Container>
  );
}
