import { getProfileUser } from "@/services/profile";
import { ProfileType } from "@/types/Profile";
import { converMiladi2Jalali } from "@/utils/dateutils";
import { useEffect, useState } from "react";
import { FieldInput } from "./FieldInput";
import { Button } from "@/components/ui/button";
import { errorToast } from "@/utils/toastUtils";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState<ProfileType>();

  const getProfile = async () => {
    {
      try {
        const res = await getProfileUser();
        if (res.status == 200) {
          console.log(res.data);
          setData(res.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handeDelete = (e: any) => {
    e.preventDefault();
    errorToast("حذف کاربر امکان پذیر نمیباشد");
  };

  const navigate = useNavigate();

  return (
    <section className="py- my-auto ">
      <div className="lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4">
        <div className="lg:w-[88%] sm:w-[88%] w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-black/30">
          <div className="">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-serif font-extrabold mb-2 dark:text-white">
              Profile
            </h1>
            <form>
              <div className="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-black/30 rounded-full bg-[url('/picture/download.png')] bg-cover bg-center bg-no-repeat"></div>
                <div className="flex justify-end"></div>
              </div>

              {data && (
                <div className="mt-10 grid grid-cols-2">
                  <FieldInput
                    label="شماره تلفن"
                    value={String(data.phone)}
                    name="phone"
                  />
                  <FieldInput
                    label="نقش"
                    value={data.roles[0].title}
                    name="role"
                  />
                  <FieldInput
                    label="سطح دسترسی"
                    value={data.roles[0].description}
                    name="description"
                  />
                  <FieldInput
                    label="تاریخ عضویت"
                    value={converMiladi2Jalali(data.created_at, "jYYYY/jMM/jD")}
                    name="created_at"
                  />
                </div>
              )}
              <div className="flex justify-end gap-2 dark:text-white">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                >
                  برگشت
                </Button>
                <Button
                  className="bg-light_red dark:text-white hover:bg-dark_red"
                  onClick={handeDelete}
                >
                  حذف کاربر
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
