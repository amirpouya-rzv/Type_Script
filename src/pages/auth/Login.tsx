import FormikControl from "@/components/form/FormikControl";
import AppButton from "@/components/shared/AppButton";
import { CardDemo } from "@/components/shared/CardDemo";
import axios from "axios";
import { Formik, Form } from "formik";
import * as yup from "yup";

type LoginFormValues = {
  phone: string;
  password: string;
  remember: boolean;
};

export default function Login() {
  const initialValues: LoginFormValues = {
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
      .min(4, "رمز عبور حداقل 4 کاراکتر باشد"),

    remember: yup.boolean(),
  });

  const onSubmit = async (values: LoginFormValues) => {
    console.log(values);

    try {
      const res = await axios.post(
        "https://ecomadminapi.azhadev.ir/api/auth/login",
        values
      );

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      {/* <div className="w-full max-w-md bg-red-50 rounded-xl p-6">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-4">
            <FormikControl
              control="input"
              name="phone"
              label="شماره تلفن"
              type="text"
            />

            <FormikControl
              control="input"
              name="password"
              label="رمز عبور"
              type="password"
            />

            <FormikControl
              control="switch"
              name="remember"
              label="مرا به خاطر بسپار"
            />

            <AppButton type="submit">
              ورود
            </AppButton>
          </Form>
        </Formik>
      </div> */}
     <CardDemo
  title="Login to your account"
  description="Enter your email below to login"
  initialValues={{
    email: "",
    password: "",
  }}
  onSubmit={(values) => console.log(values)}
  fields={[
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "m@example.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "••••••••",
    },
  ]}
/>
    </div>
  );
}