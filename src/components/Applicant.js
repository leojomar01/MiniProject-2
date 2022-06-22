import React from 'react';
import "../css/Applicant.css";
import applicantRecord from '../JSON/applicantRecord';


let retrieveApplicantData;
if(!localStorage.getItem('ApplicantRecord')) retrieveApplicantData = applicantRecord;




const Applicant = () => {

  const applicants = retrieveApplicantData;

  return (
    <div className='applicantMain'>
      {
         applicants.slice(-3).map((applicant)=>{
          return(
            <div className='card'>
              <div className='profile'>
                <img src={applicant.profile} alt="" />
                <span className='name'>{applicant.fname}</span>
                <span className='job'>Job: {applicant.job ? applicant.job : "none"}</span>
                <span className='skills'>Skills: {applicant.skills.map(skill=>skill+", " )}</span>
              </div>
              <div className='buttons'>
                <button>See Profile</button>
              </div>
            </div>
          )
         })
      }



    </div>
  )
}

export default Applicant