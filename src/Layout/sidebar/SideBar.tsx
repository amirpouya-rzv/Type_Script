import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/ui_management/reduxHook";
import { setShowSidebar } from "@/redux/ui_management/uiManagement";
import { MdOutlineClose } from "react-icons/md";
import SideBarItem from "./SideBarItem";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { showsidebar, collapsed } = useAppSelector(
    (state) => state.uiManagerReducer,
  );
  const dispatch = useDispatch();

  return (
    <>
      {/* overlay  */}
      {showsidebar && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => dispatch(setShowSidebar(false))}
        />
      )}

      {/* sidebar */}
      <section
        id="sidebar"
        className={`fixed md:right-0 top-0 h-screen overflow-y-auto z-50
              dark:text-white text-black  md:block border-l backdrop-blur-sm
              border-black/30 transition-all duration-300
              ${collapsed ? "md:w-16 w-app_sidebar_w" : "w-app_sidebar_w"}
              ${showsidebar ? "right-0" : "-right-full"}`}
      >
        {/* sidebar - header */}
        <div className="flex md:justify-center md:-mt-5 md:mx-4 items-center">
          <Link to={"/"} onClick={() => dispatch(setShowSidebar(false))}>
            <img
              className={`w-20 mx-24 mt-10 rounded-full transition-all duration-300 ${
                collapsed ? "md:w-8 md:mx-auto" : "md:w-20 md:mx-24"
              }`}
              src="/picture/images.png"
              alt="logo"
            />
          </Link>
          {/* close button in mobile */}
          <button
            className="block md:hidden mt-5 -mr-4 mx-2 transition-all transform hover:scale-110"
            onClick={() => dispatch(setShowSidebar(false))}
          >
            <MdOutlineClose size={24} />
          </button>
        </div>

        <hr className="border-black/30 shadow-2xl mt-5  dark:border-white w-9/12 mx-auto" />

        {/* items list */}
        <div onClick={() => dispatch(setShowSidebar(false))}>
          <ul>
            <SideBarItem
              to="/categories"
              Icon={TbCategory}
              title="دسته‌بندی‌ها"
              
            />
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideBar;
