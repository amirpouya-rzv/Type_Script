import { useEffect } from "react"
import Content from "./Layout/content/Content"
import Header from "./Layout/header/Header"
import SideBar from "./Layout/sidebar/SideBar"
import { useAppSelector } from "./redux/ui_management/reduxHook"
import { ToastContainer } from "react-toastify"
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // تم PrimeReact
import 'primereact/resources/primereact.min.css';                   // استایل‌های کامپوننت‌ها
import 'primeicons/primeicons.css';                                 // آیکون‌های PrimeIcons

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

  return (
    <main>
      <Content />
      <Header />
      <SideBar />
      <ToastContainer stacked/>
    </main>
  )
}

export default App
