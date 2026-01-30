import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true, // cookie send/receive
});

export default API;
