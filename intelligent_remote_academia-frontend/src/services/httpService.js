import axios from 'axios';
import auth from './authService';

// const apiUrl = 'https://localhost:44334'; // For Visual Studio
const apiUrl = 'https://localhost:5001'; // For dotnet CLI

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedErrors) {
    alert('Unexpected error occured');
  }
  return Promise.reject(error);
});

const http = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${auth.getJwt()}`,
  },
});

http.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedErrors) {
    alert('Unexpected error occured');
  }
  return Promise.reject(error);
});

export default http;
