import axios from "axios";

const baseURL = "https://takknemleg-prod.onrender.com";

const API = axios.create({ baseURL });

export default API;
