import { useAppSelector } from "@/redux/ui_management/reduxHook";
import Login from "@/pages/auth/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import ActionCategory from "@/pages/categories/ActionCategory";

const Content = () => {
  const { collapsed } = useAppSelector((state) => state.uiManagerReducer);
  const location = useLocation();
  const isLoginPage = location.pathname === "/auth/login";

  return (
    <div>
      <section
        id="content"
        className={`fixed top-0 left-0 w-full h-screen backdrop-blur-sm 
          dark:bg-black/50 dark:text-white overflow-y-auto pt-app_header_h
          transition-all duration-300
          ${!isLoginPage && (collapsed ? "md:pr-16" : "md:pr-app_sidebar_w")}`}
      >
        {isLoginPage ? (
          <div className="w-full h-full flex justify-center items-center">
            <Routes>
              <Route path="/auth/login" element={<Login />} />
            </Routes>
          </div>
        ) : (
          <div className="w-full p-4">
            <Routes>
              <Route path="/" element={<ActionCategory />} />
            </Routes>
          </div>
        )}
      </section>
    </div>
  );
};

export default Content;