import { Document } from "mongoose";
import { User } from "../../../../User"
import UserMongooseModel from '../UserMongooseModel';

export default {
    getUsers: async () => {
        return await UserMongooseModel.find();
    },

    getUser: async ({ id, email }: { id?: string, email?: string }) => {
        let filters: { id?: string, email?: string } = {};

        if (id) filters.id = id;
        if (email) filters.email = email;
        
        return await UserMongooseModel.findOne(filters);
    },

    saveUser: async (user: User) => {
        return await new UserMongooseModel(user).save();
    }
}