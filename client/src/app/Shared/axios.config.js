import axios from "axios";
import env from "react-dotenv";

export const configAxios = () => {
    console.log(env.API_URL);
    axios.defaults.baseURL = env.API_URL;
    let token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    }
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}