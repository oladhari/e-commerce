import Axios from "axios";
import { endpoint } from "./constants";

export const authAxios = Axios.create({
  baseURL: endpoint,
  headers: {
    Authorization: `Token ${localStorage.getItem("token")}`,
  },
});
