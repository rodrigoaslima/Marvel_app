import axios from "axios";

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/characters',
    params:{
        ts: 1,
        apikey: '587e683a919504a8b9323de33aeebd54',
        hash: '488264add6d395ed7f7c24ee59538d63'

    }
});

export default api;