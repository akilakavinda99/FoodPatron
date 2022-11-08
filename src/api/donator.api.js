import axios from "axios";
import { BASE_URL } from "./axiosDecleration";

const API = axios.create({
  baseURL: BASE_URL + "donator",
  // withCredentials: true
});

export const getHomeDonations = () => API.get(`/getDonations`);
export const createDonationRequest = (donation) =>
  API.post(`/createDonation`, donation);

export const getOneDonation = (donationId) =>
  API.get(`/getOneDonation/${donationId}`);

export const sendDonationRequest = (request) =>
  API.post(`/sendRequest`, request);

export const getUserDonation = (userId) =>
  API.get(`/getUserDonations/${userId}`);

export const markDonationCompleted = (donationId) =>
  API.put(`/markAsCompleted/${donationId}`);

export const getPendingRequests = (donationId) =>
  API.get(`/getPendingRequests/${donationId}`);

export const getAcceptedRequests = (donationId) =>
  API.get(`/getApprovedRequests/${donationId}`);

export const deleteDonationRequest = (donationId) =>
  API.delete(`/deleteDonation/${donationId}`);
