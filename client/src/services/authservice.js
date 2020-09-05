import jwtDecode from 'jwt-decode';
import http from './httpservice';
//import { apiUrl } from '../config.json';

//const apiEndpoint = apiUrl + "auth";
const tokenKey = "token";

export const getJwt = () => {
    return localStorage.getItem(tokenKey)
}

http.setJwt(getJwt());

export const login = async credentials => {
    const res = await http.post(apiEndpoint, credentials);
    if (!res.data) {
        if (res.headers["x-auth-token"]) localStorage.setItem(tokenKey, (res.headers["x-auth-token"]));
    } else return res;
}

export const logout = _ => {
    localStorage.removeItem(tokenKey);
}

export const getCurrentUser = _ => {
    try {
        return jwtDecode(getJwt());
    } catch (er) {
        return null
    }
}

export default {
    login,
    getJwt,
    logout,
    getCurrentUser
}



