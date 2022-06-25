import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
// import '../css/App.css';




let isLogin = localStorage.getItem('isActive')?JSON.parse(localStorage.getItem('isActive')):false;

const Header = () => {
    
    const [sidebar, setSidebar] = useState(false);
    const [showBtn, setShowBtn] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        isLogin? setShowBtn(false):setShowBtn(true);
    },[showBtn]);

    console.log(isLogin,showBtn);

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


    window.addEventListener("scroll", function(){
        const header = this.document.querySelector("header")
        header.classList.toggle("active", window.scrollY > 200)
    })

 
  return (
   
      <div className='homePage'>
          <header className='header'>
            <div className="container flex" >
                <div className="logo">
                    KDS<img src="../assets/logo.png" alt="" />
                </div>
                <div className="nav">
                    <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={()=>setSidebar(false)}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/TalentPool'>Talent Pool</Link></li>
                        <li><Link to='/JobList'>Find a Job</Link></li>
                        <li><Link to='/About'>About us</Link></li>

                        {showBtn?<input className='log' type="button" value="Login" onClick={()=>loginBtn()}/>:null}
                        {showBtn?<input className='reg'type="button" value="Sign Up" onClick={()=>regBtn()}/>:null}
                        {!showBtn?<input className='reg'type="button" value="Logout" onClick={()=>profileBtn()}/>:null}
                    </ul>
                   
                </div>
                <button className='navbar-items-icon' onClick={()=>setSidebar(!sidebar)}>
                    {sidebar ? <CloseIcon/> : <MenuIcon/>}
                </button>
            </div>
        </header> 
      </div>  
    
  )
}

export default Header
