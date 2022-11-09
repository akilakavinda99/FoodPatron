import axios from "axios";
import { BASE_URL } from "./axiosDecleration";

const API = axios.create({
  baseURL: BASE_URL + "fund",
  // withCredentials: true
});

export const newFund = (organization) => API.post("/create", organization);
export const getFundByOrganizationAndStatus = (organizationID, status) =>
  API.get(`/${organizationID}/status/${status}`);
export const getFundByOrganization = (organizationID) =>
  API.get(`/organizationfund/${organizationID}`);
export const getFundByID = (fundID) => API.get(`/${fundID}`);
export const getAllFunds = () => API.get(`/`);

export const getFundByStatus = (status) => API.get(`/status/${status}`);
export const getNFunds = (organizationId, limit) =>
  API.get(`/${organizationId}/limit/${limit}`);
export const updateFund = (fundID, fund) => API.put(`/update/${fundID}`, fund);
export const removeFund = (fundID) => API.put(`/remove/${fundID}`);
export const donateFund = (fundID, donation) =>
  API.post(`/donateFund/${fundID}`, donation);
