import { useAppSelector } from "@/redux/ui_management/reduxHook";
import Login from "@/pages/auth/Login";
import CategoriTable from "@/pages/categories/CategoriTable";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  const { collapsed } = useAppSelector((state) => state.uiManagerReducer); // ✅ اضافه شد

  return (
    <div>
      <section
        id="content"
        className={`fixed top-0 left-0 w-full h-screen backdrop-blur-sm 
          dark:bg-black/50 dark:text-white overflow-y-auto pt-app_header_h
          transition-all duration-300
          ${collapsed ? "md:pr-16" : "md:pr-app_sidebar_w"}`} // ✅ داینامیک شد
      >
        <div className="w-full p-4">
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/" element={<CategoriTable />} />
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default Content;