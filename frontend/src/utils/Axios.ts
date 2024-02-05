import axios from "axios";

const api = axios.create({
    baseURL: "https://todoapp-c2ki.onrender.com/v1",
});

export default api;