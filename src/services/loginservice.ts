import httpService from "./_httpService"
import { LoginFormType } from "@/types/LoginFormType"

export const loginUser = (data: LoginFormType) => {
  return httpService("/auth/login", "post", data);
};