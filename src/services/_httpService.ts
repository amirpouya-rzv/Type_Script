import axios, { AxiosResponse } from "axios";
import config from "./config";
import { errorToast } from "@/utils/toastUtils";

export const apipath = config.onlinePath;

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";

    errorToast(message);

    return Promise.reject(error);
  }
);

const httpService = <T>(
  url: string,
  method: "get" | "post" | "put" | "delete" | "patch",
  data?: unknown,
): Promise<AxiosResponse<T>> => {
  return axios({ baseURL: apipath + url, method, data });
};

export default httpService;
