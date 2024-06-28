import React, { useEffect, useState } from 'react'
import {FaArrowUp} from "react-icons/fa"

function Gototop() {
  
    const gotobtn=()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"});
    }

  return (
    <div>
     
    <div className='top-btn p-4 text-white float-right' onClick={gotobtn}>
        <button className=' bg-blue-500 p-2 rounded-full  hover:bg-blue-700  sticky'>
        <FaArrowUp className="top-btn--icon"></FaArrowUp>
        </button>
    </div>
    
     
    

    </div>
    
  )
}

export default Gototop