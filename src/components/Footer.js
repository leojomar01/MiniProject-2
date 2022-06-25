import React from 'react'
import "../css/footer.css";

const Footer = () => {
  return (
    <>
        <footer className='home-footer'>
            <div className="container">
                <div className="box-1">
                    <h3>Ez.com</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi consequatur ab dicta .</p>
                    <div className="socialIcon">
                        <i className='fab fa-facebook-f '></i>
                        <i className='fab fa-instagram '></i>
                        <i className='fab fa-twitter '></i>
                        <i className='fab fa-youtube '></i>  
                    </div>
                </div>
                <div className="box-2">
                    <h2>Quick links</h2>
                    <ul>
                        <li>Home</li>
                        <li>Employer</li>
                        <li>Applicant</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div className="box-3">
                    <h2>Recent post</h2>
                    <div className="text">
                        <p>You get the job, good job</p>
                        <span>21 June 2022</span>
                    </div>
                </div>
                <div className="box-4">
                    <h2>Get in touch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi consequatur ab dicta .</p>

                    <div className="icon">
                        <i className='fa fa-location-dot'></i>
                        <label htmlFor="">Metro Manila, Philippines</label>
                    </div>
                    <div className="icon">
                        <i className="fa fa-phone"></i>
                        <label htmlFor="">Phone: +63 929 231 0000</label>
                    </div>
                    <div className="icon">
                        <i className="fa fa-envelope"></i>
                        <label htmlFor="">Email:support@gmail.com</label>
                    </div>
                </div>
            </div>
            <div className='legal container'>
                    <p>Copyright @2022. All rights reserved.</p>
            </div>
        </footer>
    </>
    
  )
}

export default Footer
