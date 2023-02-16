import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://seahorse-app-9o2ri.ondigitalocean.app/api'
  });

