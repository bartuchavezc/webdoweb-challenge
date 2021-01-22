import { LoginContext } from "../context/LoginContext";
import { useState } from "react";
import { isLogged } from "../services/LoginValidation";

export function AuthProvider({ children, logged = false }) {
  
  return <LoginContext.Provider value={logged}>{children}</LoginContext.Provider>;
}
