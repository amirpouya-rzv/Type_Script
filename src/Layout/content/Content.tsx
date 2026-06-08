import Login from "@/pages/auth/Login";
import CategoriTable from "@/pages/categories/CategoriTable";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <section
        id="content"
        className="fixed top-0 left-0 w-full h-screen backdrop-blur-sm dark:bg-black/50 dark:text-white overflow-y-auto md:pr-app_sidebar_w pt-app_header_h"
      >
        <div className="w-full p-4">
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/categories" element={<CategoriTable />} />
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default Content;
