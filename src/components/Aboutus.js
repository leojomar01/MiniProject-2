import React from 'react'
import Navbar from './Navbar'
import "../css/about.css";
import male from '../assets/m.png'
import female from '../assets/f.jpg'


const Aboutus = () => {
  return (
    <div>
        <Navbar/>
        <div className="team">
            <h2>Our Team</h2>
            <div className="border-bottom"></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At earum asperiores laboriosam numquam eligendi vero voluptates.</p>
        </div>

        <div className="about-card">
            <div className="about-box"></div>
            <div className="card-image-1">
                <div className="img-Box">
                    <img src={male} alt="" />
                </div>
                <div className="card-image-content">
                    <div className="about-details">
                        <h2>Leo Villa Reyes <br />
                                <span> Full Stact Developer</span>
                        </h2>
                        <div className="about-details-icons">
                            <a href="#" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-icon google"><i className="fab fa-google"></i></a>
                            <a href="#" className="social-icon github"><i className="fab fa-github"></i></a>
                            <a href="#" className="social-icon linkedin"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <div className="action-btn">
                            <button>Portfolio</button>
                            <button>Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-image-1">
                <div className="img-Box">
                    <img src={female} alt="" />
                </div>
                <div className="card-image-content">
                    <div className="about-details">
                        <h2>Mary Nikka Richae Abangan<br />
                                <span> Full Stact Developer</span>
                        </h2>
                        <div className="about-details-icons">
                            <a href="#" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-icon google"><i className="fab fa-google"></i></a>
                            <a href="#" className="social-icon github"><i className="fab fa-github"></i></a>
                            <a href="#" className="social-icon linkedin"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <div className="action-btn">
                            <button>Portfolio</button>
                            <button>Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-image-1">
                <div className="img-Box">
                    <img src={male} alt="" />
                </div>
                <div className="card-image-content">
                    <div className="about-details">
                        <h2>Ken Domenick Sabella <br />
                                <span> Full Stact Developer</span>
                        </h2>
                        <div className="about-details-icons">
                            <a href="#" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-icon google"><i className="fab fa-google"></i></a>
                            <a href="#" className="social-icon github"><i className="fab fa-github"></i></a>
                            <a href="#" className="social-icon linkedin"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <div className="action-btn">
                            <button>Portfolio</button>
                            <button>Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus
