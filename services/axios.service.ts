import axios from "axios";
const baseUrl = process.env.BASE_URL! || "http://localhost:3000";

export const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});