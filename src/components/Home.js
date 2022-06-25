import React from 'react'
import '../css/home.css';


const Home = () => {
  return (   
    <>
      <div className="homePage">
        <div className="row">
          <div className="col-1">
            <h4>We are here to help you <br />
                  find your dream job</h4>
            <button className='primary-btn'>Contact us</button>      
          </div>

          <div className="col-2">
            <img src="../images/image-bg.jpg" alt="" className='img-home' />
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
