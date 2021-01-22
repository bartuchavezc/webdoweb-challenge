import { Request, Response } from 'express'
import GetUsersService from '../services/GetUsersService'
import * as SaveUserService from '../services/SaveUserService';

export default {
    signup: async (req: Request, res: Response) => {
        try {
            const { fullname, email, password } = req.body;

            if (await GetUsersService.findUserByEmail(email)) {
                return res.status(400).json({ error: new Error('User already exists!') })
            }

            const user = await SaveUserService.saveUser({ fullname, email, password });

            return res.json({
                data: user
            });

        } catch (error) {
            res.status(500).json({
                error: new Error("Ups! something wass wrong")
            });
        }
    }
}