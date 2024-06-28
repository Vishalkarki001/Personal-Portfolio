import React from 'react'
import css from "../assets/css.jpg"
import html from "../assets/html.jpg"
import java from "../assets/java.jpg"
import tailwindcss from"../assets/tailwindcss.jpg"
import mongodb from "../assets/mongodb.jpg"
import  react from "../assets/react.jpg"
import js from "../assets/js.jpg"

function Skills() {
  const cardItem=[{
    id:1,
    logo:html,
    name:"html"
  },{
    id:2,
    logo:css,
    name:"css"
  },{
  id:3,
  logo:js,
  name:"js"
  },
  {
    id:4,
    logo:react,
    name:"react"
    },
    {
      id:5,
      logo:mongodb,
      name:"mongodb"
      },
      {
        id:6,
        logo:tailwindcss,
        name:"tailwindcss"
        },
        {
          id:7,
          logo:java,
          name:"java"
          },
        
      
    
  

]
  return (
    <>
  
        <div>
          <h1 className='text-3xl font-semibold mb-5 p-2'>Skills</h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-7 my-16'>
            {cardItem.map(({ id, logo, name}) =>(
              <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:rounded-full p-1 cursor-pointer md:w-[200px] md:h-[200px] hover:scale-110 duration-300 mix-blend-multiply'
              key={id}>
                <img 
                src={logo}
                className='w-[150px] p-2  rounded-full mix-blend-multiply '
                alt="images"
                />
                <div>
                  <div className='px-3 font-bold text-xl mb-2 capitalize'>{name}</div>
                  </div>
                  </div>


            ) 

)}


          </div>
        </div>
        <hr/>
       </>

  )
}

export default Skills