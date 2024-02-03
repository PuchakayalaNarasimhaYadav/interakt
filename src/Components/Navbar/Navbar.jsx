import React from "react";
import NavbarStyle from './Navbar.module.css'
import { Button } from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from '../Assets/logo.webp'



export default function Navbar(){
    return(
       <>
       <nav className={NavbarStyle.nav_bar}>
          
             <div>
                <Link to='/home'><img src={logo} alt="logo" className={NavbarStyle.logo_img} /></Link>
            </div> 
           <div className={NavbarStyle.nav_content}>
                <p>Enterprice <IoMdArrowDropdown className={NavbarStyle.downArrow} /></p>
                <p>Solutions<IoMdArrowDropdown className={NavbarStyle.downArrow}/></p>
                <p>Integrations</p>
                <p>Pricing</p>
                <p>Resources</p>
                <p>Login</p>
                <Button variant="contained"style={{backgroundColor:'#fab534',color:'black'}}>Start free trail</Button>
           </div>
       </nav>
       </>
    )
}