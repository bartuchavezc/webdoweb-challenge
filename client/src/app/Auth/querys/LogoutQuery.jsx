import { Redirect } from "react-router-dom";

export function LogoutQuery(){
    localStorage.removeItem('token');
    setTimeout(100);
    return <Redirect to='/' />
}