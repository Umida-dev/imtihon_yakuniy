import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://recipes-api-5m1d.onrender.com",
});
