// src/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'your-api-base-url',
  // Add any other configurations you need
});

export default axiosInstance;
