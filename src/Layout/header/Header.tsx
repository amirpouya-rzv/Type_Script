import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  CreditCardIcon,
  LogOutIcon,
  Menu,
  UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { converMiladi2Jalali } from "@/utils/dateutils";
import {
  setShowSidebar,
  togleCollapsed,
  togleThem,
} from "@/redux/ui_management/uiManagement";
import { useAppSelector } from "@/redux/ui_management/reduxHook";
import { GiAlarmClock } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiSunLine } from "react-icons/ri";
import { BsMoon } from "react-icons/bs";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState("");
  const { collapsed } = useAppSelector((state) => state.uiManagerReducer);
  const { them } = useAppSelector((state) => state.uiManagerReducer);

  const checkTime = (i: number) => {
    if (i < 10) return "0" + i;
    return i;
  };

  const updateTime = () => {
    const today = new Date();
    const h = today.getHours();
    const m = checkTime(today.getMinutes());
    const s = checkTime(today.getSeconds());
    setCurrentTime(`${h}:${m}:${s}`);
  };

  useEffect(() => {
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    navigate("/auth/login");
  };

  return (
    <section
      id="header"
      className={`fixed top-0 h-app_header_h w-full shadow-xl backdrop-blur-sm
        dark:text-white border-b border-black/30  dark:shadow-white dark:shadow-sm
        dark:border-white transition-all duration-300
        ${collapsed ? "md:pr-16 pr-app_sidebar_w" : "pr-app_sidebar_w"}`}
    >
      <span className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-20 -mx-52 md:mx-0 p-4">

          {/* button in mobile */}
          <button
            className="md:hidden md:mt-4 -mx-20"
            onClick={() => dispatch(setShowSidebar(true))}
          >
            <Menu size={24} />
          </button>

          {/*  collapse  */}

          <button
            className={`hidden rounded-full border-2 cursor-pointer border-black/30 dark:bg-black/30 fixed  md:flex items-center justify-center w-8 h-8 bg-white shadow-md transition-all hover:scale-110 ${
              collapsed ? "right-9" : "right-68"
            } top-6 -translate-x-1/2`}
            onClick={() => dispatch(togleCollapsed())}
          >
            {collapsed ? (
              <IoIosArrowBack size={18} />
            ) : (
              <IoIosArrowForward size={18} />
            )}
          </button>

          {/* data and hour */}
          <div className="flex gap-1 md:mt-4 mx-5 items-center">
            <span>{converMiladi2Jalali(undefined, "jYYYY/jMM/jD")}</span>
            <MdOutlineDateRange
              className="text-rose-600 dark:text-dark_red"
              size={20}
            />
            <span>-</span>
            <GiAlarmClock
              className="text-cyan-600 dark:text-dark_Blue"
              size={20}
            />
            <span className="font-mono">{currentTime}</span>
          </div>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              
                <img className="w-12 h-12 cursor-pointer mx-5 rounded-full" src="/picture/download.png"/>
              
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" backdrop-blur-md">
                <Link className="flex items-center gap-13" to={'/profile'}>
              <DropdownMenuItem className="gap-13 cursor-pointer">
                پروفایل
                <UserIcon className="h-4 w-4 hover:bg-black" />
              </DropdownMenuItem>
                </Link>

              <DropdownMenuItem
                className="flex justify-between gap-2 cursor-pointer"
                onClick={() => dispatch(togleThem())}
              >
                {them === "light" ? (
                  <>
                    حالت تاریک :
                    <BsMoon size={18} className="text-gray-200" />
                  </>
                ) : (
                  <>
                    حالت روشن :
                    <RiSunLine size={18} className="text-yellow-400" />
                  </>
                )}
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="flex justify-between gap-2 cursor-pointer  text-rose-500 "
                onClick={handleLogout}
              >
                خروج
                <LogOutIcon className="h-4 w-4" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </span>
    </section>
  );
};

export default Header;
