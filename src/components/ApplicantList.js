import React, { useState } from 'react';
import "../css/ApplicantList.css";
// import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import applicantRecord from '../JSON/applicantRecord';
import Header from'./Header';


let retrieveApplicantData;
if(!localStorage.getItem('ApplicantRecord')) retrieveApplicantData = applicantRecord;


const ApplicantList = () => {
    const applicants = retrieveApplicantData;
    const [loadMore , setLoadMore] = useState(applicants.length-5);
    
   
  return (
    <>
    <div className='applicantList'>
        {
            applicants.slice(loadMore).reverse().map((applicant)=>{
                return(
                    <div className='applicant'>
                        <div className='profile'>
                            <div className='title'>
                                <img src={applicant.profile} alt="profile" />
                                <div className='info'>
                                    <span className='name'>{applicant.fname} {applicant.lname}</span>
                                    <span className='exp'>{applicant.experience} with {applicant.yearsOfExp} yr(s) of experience</span>
                                </div>
                            </div>
                            <div className='otherInfo'>
                                <div className='skills'>
                                    <span><BackupTableIcon/> {applicant.skills.map(skill=>skill+", " )}</span>
                                    <span> {(applicant.job)? applicant.job:"none"}</span>
                                    <span><SchoolIcon/> {applicant.school ? applicant.school : "none"}</span>
                                </div>
                                <div className='buttons'>
                                    <button>See Profile</button>
                                    <button>Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
                
            )
        }
        <button disabled={loadMore<=0} onClick={()=>setLoadMore(loadMore-5)}>Load More</button>
    </div>
    </>
  )
}

export default ApplicantList