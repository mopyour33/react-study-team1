import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_KEY;

const api = axios.create({
    baseURL: "https://newsdata.io/api/1",
    headers: {
        Accept:"application/json",
    }
});

export default api