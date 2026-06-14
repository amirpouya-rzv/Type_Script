import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/ui_management/reduxHook";
import { setShowSidebar } from "@/redux/ui_management/uiManagement";
import { MdOutlineClose } from "react-icons/md";
import DarkModeButtns from "./DarkModeButtns";
import SideBarItem from "./SideBarItem";
import { TbCategory } from "react-icons/tb";

const SideBar = () => {
  const { showsidebar, collapsed } = useAppSelector(
    (state) => state.uiManagerReducer,
  );
  const dispatch = useDispatch();

  return (
    <section
      id="sidebar"
      className={`fixed md:right-0 top-0 h-screen
            dark:text-white text-black md:block border-l backdrop-blur-sm
            border-black/30 transition-all duration-300
            ${collapsed ? "md:w-16 w-app_sidebar_w" : "w-app_sidebar_w"}
            ${showsidebar ? "right-0" : "-right-full"}`}
    >
      <div className="flex justify-between md:justify-end md:-mt-5 md:mx-2 items-center">
        <DarkModeButtns />
        <button
          className="block md:hidden mt-5 mr-4 mx-2 transition-all transform hover:scale-110"
          onClick={() => dispatch(setShowSidebar(false))}
        >
          <MdOutlineClose size={24} />
        </button>
      </div>

      <hr className="border-black/30 shadow-2xl mt-5 dark:border-white w-9/12 mx-auto" />

      <div>
        <ul>
          <SideBarItem
            to="/categories"
            Icon={TbCategory}
            title="دسته‌بندی‌ها"
          />
          <SideBarItem
            to="/categories"
            Icon={TbCategory}
            title="دسته‌بندی‌ها"
          />
          <SideBarItem
            to="/categories"
            Icon={TbCategory}
            title="دسته‌بندی‌ها"
          />
          <SideBarItem
            to="/categories"
            Icon={TbCategory}
            title="دسته‌بندی‌ها"
          />
          <SideBarItem
            to="/categories"
            Icon={TbCategory}
            title="دسته‌بندی‌ها"
          />
          <SideBarItem
            to="/categories"
            Icon={TbCategory}
            title="دسته‌بندی‌ها"
          />
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
