import React, { useState,useEffect } from 'react';
import {Link,useNavigate} from "react-router-dom";
import '../css/navbar.css';




let isLogin = localStorage.getItem('isActive')?JSON.parse(localStorage.getItem('isActive')):false;

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    // const [sidebar, setSidebar] = useState(false);
 
    const [showBtn, setShowBtn] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        isLogin? setShowBtn(false):setShowBtn(true);
    },[showBtn]);

    const loginBtn = () => navigate('/Login');
    const regBtn = () => {
        navigate('/Register');
        setShowBtn(false);
    }

    const profileBtn =  () => {
        localStorage.setItem("isActive", JSON.stringify(false))
        localStorage.setItem("isAdmin", JSON.stringify(false))
        window.location.reload(true);
    };
   

    
  return (
    <>
        <nav className='navBar'>
            <h3 className='logo'>EZ.com</h3>  
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={()=>setIsMobile(false)}>
                <Link to='/' className='home'><li>Home</li></Link>
                <Link to='/TalentPool' className='employer'><li>Employer</li></Link>
                <Link to='/JobList' className='applicantNavbar'><li>Applicant</li></Link>
                <Link to='/about' className='about'><li>About us</li></Link>
                
                {showBtn?<input className='log' type="button" value="Login" onClick={()=>loginBtn()}/>:null}
                {showBtn?<input className='reg'type="button" value="Sign Up" onClick={()=>regBtn()}/>:null}
                {!showBtn?<input className='reg'type="button" value="Logout" onClick={()=>profileBtn()}/>:null}
            </ul>   
            <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
                {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i> }
            </button>
        </nav>  
    </>
  )
}

export default Navbar
