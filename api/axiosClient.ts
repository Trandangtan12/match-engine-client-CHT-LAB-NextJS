import axios from "axios";

export const axiosClient = (url: string) => {
  return axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
