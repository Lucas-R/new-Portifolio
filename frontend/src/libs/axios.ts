import axios from "axios";

export const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
});