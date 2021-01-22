import { Router } from "express";
import { check } from "express-validator";
import { validateRequest } from "../../shared/Validation";
import LoginController from "../controllers/LoginController";
import SignupController from "../controllers/SignupController";
import { LoginValidations } from "../use/AuthValidations";

export const router = Router();

router.post('/login', [...LoginValidations, validateRequest], LoginController.login);

router.post('/signup', [
    check('fullname').not().isEmpty(),
    check('email').isEmail(),
    check("password")
        .not().isEmpty()
    , validateRequest], SignupController.signup);