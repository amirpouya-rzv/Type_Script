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
import { Form, Formik } from "formik";
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
      .min(8, "رمز عبور حداقل ۸ کاراکتر باشد"),
    remember: yup.boolean(),
  });

  const onSubmit = async (values: LoginFormType) => {
    try {
      const res = await loginUser(values)
      console.log(res.data);
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
                label="مرا به خاطر نگه‌دار"
              />
            </CardContent>

            <CardFooter>
              <Button type="submit" className="w-full">
                ورود
              </Button>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </div>
  );
}