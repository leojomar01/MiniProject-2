import React, { useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import '../css/App.css';





const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const navigate = useNavigate();
    const loginBtn = () => navigate('/Login');
    const regBtn = () => navigate('/Validate');

    window.addEventListener("scroll", function(){
        const header = this.document.querySelector("header")
        header.classList.toggle("active", window.scrollY > 200)
    })
  return (
   
        <header className='header'>
            <div className="container flex">
                <div className="logo">
                    KDS<img src="../assets/logo.png" alt="" />
                </div>
                <div className="nav">
                    <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={()=>setSidebar(false)}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/SearchJob'>Employer</Link></li>
                        <li><Link to='/JobList'>Aplicant</Link></li>
                        <li><Link to='/about'>About us</Link></li>
                        {/* <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/contact'>Contact us </Link></li> */}
                        {/* <li className='icon'>
                            
                            <SearchOutlinedIcon className='HeaderIcon'/>
                            <WorkIcon className='HeaderIcon'/>
                            <GridViewIcon className='HeaderIcon'/>
                        </li> */}
                        <input className='log' type="button" value="Login" onClick={()=>loginBtn()}/>
                        <input className='reg'type="button" value="Sign Up" onClick={()=>regBtn()}/>
                        
                    </ul>
                   
                </div>
                <button className='navbar-items-icon' onClick={()=>setSidebar(!sidebar)}>
                    {sidebar ? <CloseIcon/> : <MenuIcon/>}
                </button>
            </div>
        </header>   
    
  )
}

export default Header
