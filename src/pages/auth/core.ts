import { loginUser } from "@/services/loginservice";
import { LoginFormType } from "@/types/LoginFormType";
import { errorToast, successToast } from "@/utils/toastUtils";
import { NavigateFunction } from "react-router-dom";
import * as yup from "yup";

export const validationSchema = yup.object({
  phone: yup
    .string()
    .required("شماره تلفن الزامی است")
    .matches(/^09\d{9}$/, "شماره تلفن معتبر نیست"),
  password: yup
    .string()
    .required("رمز عبور الزامی است")
    .min(6, "رمز عبور حداقل 6 کاراکتر باشد"),
  remember: yup.boolean(),
});

export const initialValues: LoginFormType = {
  phone: "",
  password: "",
  remember: false,
};

export const onSubmit = async (values: LoginFormType, navigate: NavigateFunction) => {
  try {
    const res = await loginUser(values);
    if (res.status === 200) {
      localStorage.setItem("loginToken", res.data.token);
      successToast(res.message || "خوش آمدید!");
      navigate("/");
    } else {
      errorToast(res.data.message);
    }
  } catch (err) {
    console.log(err);
  }
};