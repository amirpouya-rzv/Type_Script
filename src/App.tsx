import { useEffect } from "react"
import Content from "./Layout/content/Content"
import Header from "./Layout/header/Header"
import SideBar from "./Layout/sidebar/SideBar"
import { useAppSelector } from "./redux/ui_management/reduxHook"
import { ToastContainer } from "react-toastify"
import Layout from "./Layout/Layout"
import { Navigate, useLocation } from "react-router-dom"


function App() {
  const { them } = useAppSelector(state => state.uiManagerReducer)

  useEffect(() => {
    const root = document.documentElement
    if (them === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [them])

  const location = useLocation()
  
 return (
  <main>
    {location.pathname.startsWith("/auth") ? (
      <Content />
    ) : (
      <>
        <img
          src="/picture/images.jpg"
          style={{ width: "230vh", height: "100vh" }}
        />
        <Layout />
        <ToastContainer stacked />
      </>
    )}
  </main>
);
}

export default App
