import { check } from "express-validator";
export const LoginValidations = [
    check("email").not().isEmpty().isEmail(),
    check("password")
        .not().isEmpty()
]

// export const SignupValidations = [
// ]