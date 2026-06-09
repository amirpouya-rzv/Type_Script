import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/ui_management/reduxHook";
import {
  setShowSidebar,
} from "../../redux/ui_management/uiManagement";
import { MdOutlineClose } from "react-icons/md";
import DarkModeButtns from "./DarkModeButtns";
import SideBarItem from "./SideBarItem";
import { TbCategory } from "react-icons/tb";

const SideBar = () => {
  const { showsidebar, them } = useAppSelector(
    (state) => state.uiManagerReducer,
  );

  const dispatch = useDispatch();
  return (
    <section
      id="sidebar"
      className={`fixed md:right-0 top-0 h-screen w-app_sidebar_w
                dark:text-white  text-black md:block border-l backdrop-blur-sm
                border-dark_green darj transition-all ${showsidebar ? "right-0" : " -right-full"}`}
    >
      <div className="flex justify-between md:justify-end md:-mt-5 md:mx-2 items-center  ">
        <DarkModeButtns />

        <button
          className="block md:hidden mt-5 mr-4 mx-2 transition-all transform hover:scale-110"
          onClick={() => {
            dispatch(setShowSidebar(false));
          }}
        >
          <MdOutlineClose size={24} />
        </button>
        {/* items */}
      </div>
      <hr className="border-black shadow-2xl mt-5  dark:border-white w-9/12 mx-auto" />
      <div>
        <ul>
         
          <SideBarItem to={"/categories"} Icon={TbCategory} title="محصولات" />
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
  