import React from 'react'

import  {  Route, Routes, BrowserRouter} from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'
import About from "./component/About"
import Contact from "./component/Contact"
import Skills from "./component/Skills"
import Gototop from './component/Gototop'
import {Toaster} from "react-hot-toast"




function App() {
  return (
    <>
    <div>
      
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="skills" element={<Skills/>}/>
    
/</Route>

  </Routes>
  </BrowserRouter>


       </div>
       <Toaster/>
       </>
  )
}

export default App