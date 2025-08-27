import axios from "axios";

export const api = axios.create({
  baseURL: "https://bd3cfa7a1652.ngrok-free.app/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});
