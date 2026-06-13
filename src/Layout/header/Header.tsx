import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  CreditCardIcon,
  LogOutIcon,
  Menu,
  SettingsIcon,
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
import { setShowSidebar } from "@/redux/ui_management/uiManagement";
import { GiAlarmClock } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState("");

  // تابع برای فرمت کردن زمان
  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  const updateTime = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    setCurrentTime(`${h}:${m}:${s}`);
  };

  useEffect(() => {
    updateTime(); // اجرای اولیه
    const timer = setInterval(updateTime, 1000); 
    
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loginToken');
    navigate('/auth/login');
  };

  return (
    <section
      id="header"
      className="fixed top-0 h-app_header_h w-full shadow-lg backdrop-blur-sm 
  dark:text-white md:pr-app_sidebar_w border-b border-dark_green dark:shadow-white dark:shadow-sm border-b-dark_green dark:border-white"
    >
      <span className="flex items-center justify-between">
        <div className="flex items-center justify-between p-4">
          <button
            className="md:hidden mt-4 mx-2"
            onClick={() => dispatch(setShowSidebar(true))}
          >
            <Menu size={24} />
          </button>
          <div className="flex gap-1 mt-4 mx-5 items-center">
            <MdOutlineDateRange className="text-rose-600" size={20}/>
            <span>{converMiladi2Jalali(undefined, "jYYYY/jMM/jD")}</span>-
            <span className="font-mono">{currentTime}</span>
            <GiAlarmClock className="text-cyan-600" size={20}/>
          </div>
          <span className="flex gap-2 justify-end items-center"></span>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="mx-5" variant="outline">
                Open
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mx-5 backdrop-blur-md">
              <DropdownMenuItem>
                <UserIcon className="ml-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCardIcon className="ml-2 h-4 w-4" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon className="ml-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="border-y text-dark_red border-light_red"
                onClick={handleLogout}
              >
                <LogOutIcon className="ml-2 h-4 w-4" />
                خروج
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </span>
    </section>
  );
};

export default Header;