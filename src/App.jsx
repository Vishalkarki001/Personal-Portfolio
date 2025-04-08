

import  {  Route, Routes, BrowserRouter} from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'
import About from "./component/About"
import Contact from "./component/Contact"
import Skills from "./component/Skills"
import {Toaster} from "react-hot-toast"
import Projects from './component/Projects'




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
    <Route path="projects" element={<Projects/>}/>
    
/</Route>

  </Routes>
  </BrowserRouter>


       </div>
       <Toaster/>
       </>
  )
}

export default App