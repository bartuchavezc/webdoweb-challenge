import { hashSync, compareSync } from "bcrypt";
import GetUsersService from "./GetUsersService";
import { setNewToken } from "./SetTokenService";

export const login = ({ email, password }: { email: string, password: string }) => {
    return new Promise(async (resolve, reject) => {
        try {

            let userLogged: any = await GetUsersService.findUserByEmail(email);

            if (!userLogged) {
                reject({ error: new Error("Email or password wrong"), status: 400 });
            }

            if (!matchPasswordHashed(password, userLogged.password)) {
                reject({ error: new Error("Email or password wrong"), status: 400 });
            }

            if (!userLogged._meta.token) {
                userLogged = await setNewToken(userLogged).catch(e => { throw e });
            }
            
            resolve(userLogged);

        } catch (error) {
            reject({ error: new Error('Ups! something was wrong, try later'), status: 500 });
        }


    })
}

export const getPasswordHashed = (password: string) => {
    return hashSync(password, 10);
}

export const matchPasswordHashed = (password: string, hashed: string) => {
    return compareSync(password, hashed);
}
