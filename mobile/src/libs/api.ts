import axios from "axios";

export const api = axios.create({
	baseURL: "https://nlw-return-production-204f.up.railway.app/",
});
