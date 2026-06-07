import App from "@/App";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/AppInput";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    password: "",
    phone: "",
    remmeberme: "",
  });

  const onSubmit = ({e}) => {
    e.preventDefault();
    console.log(data)
    // axios
    //   .post("https://ecomadminapi.azhadev.ir/api/auth/login", data)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="flex justify-center items-center flex-col bg-black h-screen">
      <form
        onSubmit={onSubmit}
        className="border  border-red-500 backdrop:blur-lg"
      >
        <AppInput
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          value={data.phone}
          title="phonenumber"
          className="w-96 text-black"
          placeholder={"Enter your phone"}
        />
        <AppInput
          onChange={(e) => setData({ ...data, password: e.target.value })}
          value={data.password}
          title="password"
          className="w-96 text-black"
          placeholder={"Enter your password"}
        />
        <div className="flex items-center gap-3 text-black">
          {/* <lable>remmeber me</lable> */}
          <input type="checkbox" placeholder="remmeber me" />
        </div>
        <AppButton title="login" />
      </form>
    </div>
  );
}
