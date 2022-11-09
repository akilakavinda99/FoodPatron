import axios from "axios";
import { BASE_URL } from "./axiosDecleration";

const API = axios.create({
  baseURL: BASE_URL + "requester",
  // withCredentials: true
});

export const getallReq = () => API.get(`/allrequests`);
