import Axios from "axios";
import { endpoint } from "./constants";

export const authAxios = Axios.create({
  baseURL: endpoint,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Token ${localStorage.getItem("token")}`,
  },
});
