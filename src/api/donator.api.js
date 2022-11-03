import axios from "axios";
import { BASE_URL } from "./axiosDecleration";

const API = axios.create({
  baseURL: BASE_URL + "donator",
  // withCredentials: true
});

export const getHomeDonations = () => API.get(`/getDonations`);
export const getOneDonation = (donationId) =>
  API.get(`/getOneDonation/${donationId}`);
