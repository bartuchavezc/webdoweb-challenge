import { check } from "express-validator";
export const LoginValidations = [
    check("email").isEmail(),
    check("password").notEmpty()
]

// export const SignupValidations = [
// ]