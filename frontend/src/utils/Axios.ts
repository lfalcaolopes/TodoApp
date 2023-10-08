import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7231/v1",
});

export default api;