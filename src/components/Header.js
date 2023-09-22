import React from 'react'
import Logo from "../assets/photo.png"
import { Link, NavLink } from "react-router-dom"; 


export const Header = () => {
  return (
    <header >
        <Link to="/" className="logo h-fit">
        <img src={Logo} class="pic"alt="Papachio Logo" />
        <span class=" hover:uppercase animate-pulse title-header name">Johnny</span>
      </Link>
        <nav className='navigation text-right nav'>
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/Experiece" className="link">Experience</NavLink>
        <NavLink to="/Certificates" className="link">Certificates</NavLink>
        <NavLink to="/Skills" className="link">Skills</NavLink>
        <NavLink to="/Contact" className="link">Contact</NavLink>
        </nav>
        
        
    </header>
  )
}

export default Header;



