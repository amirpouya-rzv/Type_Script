import axios, { Method } from "axios";
import config from "./config";

type HttpServiceProps = {
  url: string;
  method: Method;
  data?: unknown;
  headers?: Record<string, string>;
};

const httpService = ({ url, method, data, headers }: HttpServiceProps) => {
  const token = localStorage.getItem("token");

  return axios({
    url: config.onlinePath + url,
    method,
    data,
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": "application/json",
    },
  });
};

export default httpService; 