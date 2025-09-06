import axios from "axios";
export const BASE_URL = 'http://localhost:3000/';
// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL, // Set your API base URL here (e.g., 'http://localhost:5000/api')
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
