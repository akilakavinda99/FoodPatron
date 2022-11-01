import axios from "axios";
import { BASE_URL } from "./axiosDecleration";

const API = axios.create({
  baseURL: BASE_URL + "home",
  // withCredentials: true
});

export const getAllDonations = () => API.get(`/donations`);
