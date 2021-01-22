import { Request, Response } from 'express';
import { login as loginService} from '../services/LoginService';

export default {
    login: async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const user: any = await loginService({ email, password });

            return res.json({
                statusCode: 200,
                data: {
                    token: user._meta.token
                }
            });

        } catch (error) {
            return res.status(200).json({
                statusCode: error.status,
                error: error.error.message
            })
        }
    }
}