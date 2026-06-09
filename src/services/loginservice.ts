import httpService from "./_httpService"
import { LoginFormType } from "@/types/LoginFormType"

export const loginUser = (values : LoginFormType) => {
  return httpService("/auth/login", "post", {
    ...values,
    remember : values.remember ? 1 : 0,
  });
};