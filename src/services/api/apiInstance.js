import axios from "axios";

let base_url = "http://localhost:8080/";

const api = axios.create({
  baseURL: base_url,
  //   withCredentials: true,
});

export default api;
