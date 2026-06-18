import FormikControl from "@/components/form/FormikControl";
import { Button } from "@/components/ui/button";

import { Form, Formik } from "formik";
import { Loader, LucideEyeClosed } from "lucide-react";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { validationSchema, onSubmit, initialValues } from "./core";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto w-full">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-black/30 dark:text-white">
          Logi in
        </h1>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmit(values, navigate)}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              name="phone"
              label="شماره همراه"
              placeholder="09123456789"
            />
            <div className="relative transition-all duration-200 ">
              <FormikControl
                control="input"
                name="password"
                label="رمز عبور"
                type={isVisible ? "text" : "password"}
                placeholder="رمز عبور را وارد کنید"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute left-3 top-10"
              >
                {isVisible ? (
                  <FaRegEye className="mt-1" />
                ) : (
                  <LucideEyeClosed />
                )}
              </button>
            </div>
            <FormikControl
              control="switch"
              name="remember"
              label="مرا به خاطر بسپارید"
            />
            <Button
              type="submit"
              className="w-full dark:bg-[#004142] dark:text-white disabled:bg-dark_Blue hover:dark:bg-[#008080]"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? (
                <div className="flex items-center gap-3 ">
                  <p>لطفا منتظر بمانید</p>
                  <Loader className="animate-spin" />
                </div>
              ) : (
                <p>ورود</p>
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
