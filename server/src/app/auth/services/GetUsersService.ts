import UserMongooseRepository from "../dal/persistence/mongoose/repositroty/UserMongooseRepository"

export default {

    getUsers: () => {
        return UserMongooseRepository.getUsers()
    },

    findUserById: async (id: string) => {
        return await UserMongooseRepository.getUser({id});
    },

    findUserByEmail: async (email: string) => {
        return await UserMongooseRepository.getUser({email});
    }
    
}