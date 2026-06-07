import React from "react";
import { useDispatch } from "react-redux";
import {
  CreditCardIcon,
  LogOutIcon,
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

const Header = () => {
  const dispatch = useDispatch();

  return (
    <section
      id="header"
      className="fixed top-0 h-app_header_h w-full shadow-lg bg-slate-200 
 dark:bg-[#25232c] dark:text-white md:pr-app_sidebar_w border-b border-rose-600 dark:shadow-rose-800 border-b-rose-600 dark:border-rose-600"
    >
      <span className="flex items-center justify-between">
        <div className="flex justify-between p-4">
        <button
          className="md:hidden mt-4 mx-2"
          onClick={() => dispatch(setShowSidebar(true))}
        ></button>
        <p className="hidden md:block">
          {converMiladi2Jalali(undefined, "ddd. jD jMMMM jYYYY")}
        </p>
      </div>
      <div>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button  className="mx-5" variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-5 bg-white">
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
        <DropdownMenuItem className=" border-y text-dark_red border-light_red" variant="destructive">
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </div>
      </span>
    </section>
  );
};

export default Header;
