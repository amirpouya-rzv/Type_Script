import { useState } from "react"
import Content from "./Layout/content/Content"
import Header from "./Layout/header/Header"
import SideBar from "./Layout/sidebar/SideBar"

function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
 <>
  <Content/>
  <Header setShowSideBar={()=>{setShowSideBar(!showSideBar)}}/>
  <SideBar showSideBar={showSideBar} setHiddenSideBar={()=>setShowSideBar(false)}/>
 </>
  )
}

export default App
