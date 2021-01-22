import { Request, Response } from 'express';
import { login as loginService} from '../services/LoginService';

export default {
    login: async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const user: any = await loginService({ email, password });

            return res.json({
                data: {
                    token: user._meta.token
                }
            });

        } catch (error) {
            return res.status(error.status).json({
                error: error.error.message
            })
        }
    }
}