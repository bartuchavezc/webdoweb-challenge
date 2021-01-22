import { Request, Response } from 'express'
import GetUsersService from '../services/GetUsersService'
import * as SaveUserService from '../services/SaveUserService';

export default {
    signup: async (req: Request, res: Response) => {
        try {
            const { fullname, email, password } = req.body;

            if (await GetUsersService.findUserByEmail(email)) {
                return res.status(200).json({ statusCode: 400, error: 'User already exists!' })
            }

            const user = await SaveUserService.saveUser({ fullname, email, password });

            return res.json({
                statusCode: 200,
                data: user
            });

        } catch (error) {
            res.status(500).json({
                error: "Ups! something wass wrong"
            });
        }
    }
}