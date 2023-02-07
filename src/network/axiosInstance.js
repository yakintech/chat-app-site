const { default: axios } = require("axios");

export const axiosInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000
  });

