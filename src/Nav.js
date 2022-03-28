import React, { useEffect, useState } from 'react'
import "./Nav.css"
export default function Nav() {
    const [show,handlshow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
           if(window.scrollY>100) {
               handlshow(true)
              
           } else handlshow(false)
        })
        return()=>{
            window.addEventListener('scroll')
        }
    },[])
  return (
    <div className={`nav ${show&&"nav__black"}`}>
        <img className='nav__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='Netflix logo'/>

        <img className="nav__avater" src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Avater logo'/>
    </div>
  )
}
