import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://localhost:7217/api/v1/',
});
