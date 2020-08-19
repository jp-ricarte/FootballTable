import axios from "axios";

const api = axios.create({
  baseURL: "https://api.football-data.org/v2/",
});

export default api;
