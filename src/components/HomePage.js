import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Applicant from './Applicant';
import Branding from './Branding';
import Footer from './Footer';



const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Branding/>
        <Applicant/>
        <Footer/>


    </div>
  )
}

export default HomePage