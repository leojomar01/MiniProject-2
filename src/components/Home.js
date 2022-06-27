import React from 'react'
import HomeImg from '../assets/image-bg.jpg'
import '../css/home.css';


const Home = () => {
  return (   
    <>
      <div className="homePage">
        <div className="row">
          <div className="col-1">
            <h4>Apply and Hire <br />
                  the EZ way!</h4>
            <button className='primary-btn'>Contact us</button>      
          </div>

          <div className="col-2">
            <img src={HomeImg} alt="" className='img-home' />
            <div className="color-box"></div>
          </div>
        </div>

        <div className="socialLinks">
            <i class='fab fa-facebook-f facebook'></i>
            <i class='fab fa-instagram instagram'></i>
            <i class='fab fa-twitter twitter'></i>
            <i class='fab fa-youtube youtube'></i>
            <i class='fab fa-pinterest pinterest'></i>
        </div>
      </div>
    </>
  )
}

export default Home
