import React from 'react';
import "../css/Applicant.css";
import applicantRecord from '../JSON/applicantRecord';
import {useNavigate} from 'react-router-dom';



let retrieveApplicantData;
if(!localStorage.getItem('ApplicantRecord')) retrieveApplicantData = applicantRecord;




const Applicant = () => {
  const navigate = useNavigate();
  const applicants = retrieveApplicantData;

  const handleBtn = (e) => {navigate('/ApplicantProfile',{state:e})};

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
                  <span className='name'>{applicant.fname}</span>
                  <span className='job'>Job: {applicant.job ? applicant.job : "none"}</span>
                  <span className='skills'>Skills: {applicant.skills.map(skill=>skill+", " )}</span>
                </div>
                <div className='buttons'>
                  <button onClick={()=>handleBtn(applicant)}>See Profile</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Applicant