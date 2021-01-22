import {createContext} from 'react';
import {isLogged} from '../services/LoginValidation';

export const LoginContext = createContext(isLogged());