import { v4 } from 'uuid';
import UserMongooseRepository from '../dal/persistence/mongoose/repositroty/UserMongooseRepository';
import { User } from '../User';
import { getPasswordHashed } from './LoginService';

export const saveUser = ({ fullname, email, password }: { fullname: string, email: string, password: string }) => {
    return UserMongooseRepository.saveUser(new User(
        v4(),
        fullname,
        getPasswordHashed(password),
        email,
        { createdAt: new Date(), updatedAt: new Date() }
    ));
}