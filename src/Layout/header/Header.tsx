import React from "react";
import { useDispatch } from "react-redux";
import {
  CreditCardIcon,
  Dot,
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
import { GiHobbitDwelling } from "react-icons/gi";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <section
      id="header"
      className="fixed top-0 h-app_header_h w-full shadow-lg backdrop-blur-sm 
  dark:text-white md:pr-app_sidebar_w border-b border-dark_green dark:shadow-white dark:shadow-sm border-b-dark_green dark:border-white"
    >
      <span className="flex items-center justify-between">
        <div className="flex justify-between p-4">
          <button
            className="md:hidden mt-4 mx-2"
            onClick={() => dispatch(setShowSidebar(true))}
          >
            <Menu size={24} />
          </button>
          <p className="hidden md:block">
            {converMiladi2Jalali(undefined, "ddd. jD jMMMM jYYYY")}
          </p>
          <span className="flex gap-2 justify-end items-center "></span>
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
                <UserIcon />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCardIcon />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className=" border-y text-dark_red border-light_red"
                variant="destructive"
                onClick={()=>{localStorage.removeItem('loginToken')}}
              >
                <LogOutIcon />
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
