import axios from "axios";
import auth from "./authService";

const apiUrl = "https://localhost:44334";

const http = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${auth.getJwt()}`,
  },
});

axios.interceptors.response.use(null, (error) => {});

export default http;
