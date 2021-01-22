import { json, NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const validateJWT = (req: Request, res: Response, next: NextFunction) => {
    // leer el token

    const token = req.header('Authorization')?.split('Bearer ')[0];

    if (!token) {
        return res.status(401).json({
            ok: false,
            message: "Unauthorized"
        });
    }

    try {
        let signature: any = process.env.JWT_SECRET;
        const jwt_destructured: any = jwt.verify(token, signature);
        
        if (!jwt_destructured) {
            throw new Error();
        }

        next();
    } catch (error) {
        res.status(401).json({
            ok: false,
            message: "Unauthorized"
        });
    }

    next();
}

module.exports = {
    validateJWT
}