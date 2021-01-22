import { Document, model } from 'mongoose';
import jwt from 'jsonwebtoken';
import { config } from '../../../config';
import UserMongooseModel from '../dal/persistence/mongoose/UserMongooseModel';

export const getNewToken = (user: any) => {
    let signature: any = config.jwt_secret;
    return jwt.sign({ id: user.id }, signature, {
        expiresIn: (86400 * 14) // 86400 = 24 hs -> expire in 14 days
    })
}

export const setNewToken = async (user: any) => {
    let token = getNewToken(user);
    return await UserMongooseModel.updateOne({ email: user.email }, { _meta: { token } });
}
