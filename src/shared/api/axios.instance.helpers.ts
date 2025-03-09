import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://assets.cdn.soomgo.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
