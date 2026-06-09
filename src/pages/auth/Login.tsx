import FormikControl from "@/components/form/FormikControl";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loginUser } from "@/services/loginservice";
import { LoginFormType } from "@/types/LoginFormType";
import { errorToast, successToast } from "@/utils/toastUtils";
import { Form, Formik } from "formik";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function Login() {
  const initialValues: LoginFormType = {
    phone: "",
    password: "",
    remember: false,
  };

  const validationSchema = yup.object({
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

  const navigate = useNavigate()

  const onSubmit = async (values: LoginFormType) => {
    try {
      const res = await loginUser(values);
      if (res.status === 200) {
        localStorage.setItem('loginToken', JSON.stringify(res.data))
        successToast(res.message || "خوش آمدید!");
        navigate('/')
      } else {
        errorToast(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <Card className="w-full max-w-sm bg-white text-black dark:bg-gray-900 dark:text-white">
        <CardHeader>
          <CardTitle className="text-2xl">ورود</CardTitle>
        </CardHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <CardContent className="flex flex-col gap-4">
                <FormikControl
                  control="input"
                  name="phone"
                  label="شماره همراه"
                  placeholder="09123456789"
                />
                <FormikControl
                  control="input"
                  name="password"
                  label="رمز عبور"
                  type="password"
                  placeholder="رمز عبور را وارد کنید"
                />
                <FormikControl
                  control="switch"
                  name="remember"
                  label="مرا به خاطر بسپارید"
                />
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <p>لطفا منتظر بمانید</p>
                      <Loader className="animate-spin"/>
                    </div>
                  ) : (
                    <p>ورود</p>
                  )}
                </Button>
              </CardFooter>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}