import { axiosInstance } from "./axiosInstance";

const api = {
    getAll: async (url) => {

        let response = [];

        await axiosInstance.get(url)
            .then(res => {
                response = res.data;
            })

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