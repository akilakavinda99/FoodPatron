import axios from 'axios';
import { BASE_URL } from './axiosDecleration';

const API = axios.create({
    baseURL: BASE_URL + 'main',
    // withCredentials: true
});

export const userSignIn = (user) => API.post("/login", user);
