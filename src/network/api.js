import { axiosInstance } from "./axiosInstance";

export const api = {
    getAll: async (url) => {

        let response = [];

        await axiosInstance.get(url)
            .then(res => {
                response = res.data;
            })
       return response;
    },
    add: async (url) => {
        let response = {};
        await axiosInstance.post(url)
            .then(res => {
                response = res.data;
            });

        return response;
    }
}