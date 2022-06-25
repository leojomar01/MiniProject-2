import React from 'react';
import "../css/Applicant.css";

import applicantRecord from '../JSON/applicantRecord';
import {useNavigate} from 'react-router-dom';




let retrieveApplicantData;
retrieveApplicantData = localStorage.getItem('ApplicantRecord')?JSON.parse(localStorage.getItem('ApplicantRecord')): retrieveApplicantData = applicantRecord;
let isLogin = localStorage.getItem('isActive')?JSON.parse(localStorage.getItem('isActive')):false;



const Applicant = () => {
  const navigate = useNavigate();
  const applicants = retrieveApplicantData;

  const handleBtn = (e) => {navigate('/ApplicantProfile',{state:e})};
  const signinBtn =() => {navigate('/Login')};

  return (
    <>
    <h2 className='applicantTitle'>Hire developers in days, not months</h2>
    <h2 className='applicantTitle2'>We have the tech talent you're looking for</h2>
      <div className='applicantMain'>
        {
          applicants.reverse().slice(-6).map((applicant,index)=>{
            return(
              <div className='card'>
                <div className='profile'>
                  <img src={applicant.profile} alt="" />
                </div>
                
                <div>
                  <span className='name'>{applicant.fname}</span>
                </div>
                <div className='details'>
                  <div>  
                    <span className='job'><label>Job:</label>  {applicant.job ? applicant.job : "none"}</span>
                  </div>
                  <div>  
                    <span className='skills'><label>Skills:</label> {applicant.skills.map(skill=>skill+", " )}</span>
                  </div>
                </div>
                <footer>
                  <h1>Contact</h1>
                  <a href="#" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-icon google"><i className="fab fa-google"></i></a>
                  <a href="#" className="social-icon github"><i className="fab fa-github"></i></a>
                  <a href="#" className="social-icon linkedin"><i className="fab fa-linkedin"></i></a>

                  <section class="links">
                      {isLogin?<button onClick={()=>handleBtn(applicant)}>See Profile</button>:null}
                      {!isLogin?<button onClick={()=>signinBtn(applicant)}>Sign in to see full profile</button>:null}
                      {isLogin?<button>Contact me</button>:null}
                     
                  </section>
                </footer>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Applicant