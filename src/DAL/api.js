import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://mysterious-reef-29460.herokuapp.com/api/v1/'
});

export const newsAPI = {
    async getNews() {
        let response = await instance.get('news')
        return response.data;
    }
};

export const authAPI = {
    async login(email, password) {
        let response = await instance.post('validate', {email, password})
            return response.data;
    },
    async getUserInfo(userId) {
        let response = await instance.get(`user-info/${userId}`)
        return response.data;
    }
}