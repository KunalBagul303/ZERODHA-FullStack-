import axios from "axios";

const API = axios.create({
  baseURL: "https://zerodha-fullstack-project-wwf5.onrender.com",

  withCredentials: true, // cookie send/receive
});

export default API;
