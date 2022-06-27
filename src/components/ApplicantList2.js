import React, { useState,useEffect } from 'react';
import "../css/ApplicantList.css";
// import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import applicantRecord from '../JSON/applicantRecord';
import {useNavigate} from 'react-router-dom';
import male from '../assets/m.png'
import female from '../assets/f.jpg'



let retrieveApplicantData;
retrieveApplicantData = localStorage.getItem('ApplicantRecord')?JSON.parse(localStorage.getItem('ApplicantRecord')): retrieveApplicantData = applicantRecord;


let retrieveUsers = localStorage.getItem('Users')?JSON.parse(localStorage.getItem('Users')):[];

let isAdmin=localStorage.getItem('isAdmin')?JSON.parse(localStorage.getItem('isAdmin')):false;
let isLogin = localStorage.getItem('isActive')?JSON.parse(localStorage.getItem('isActive')):false;

const ApplicantList = (props) => {
    const [applicants, setApplicants] = useState(retrieveApplicantData);
    const [loadMore , setLoadMore] = useState(applicants.length-5);

    const navigate = useNavigate();
    const handleBtn = (e) => {navigate('/ApplicantProfile',{state:e})};
    const signinBtn =() => {navigate('/Login')};


    console.log(props);

    const handleDelete = (data,index)=>{
        let applicant=applicants;
        let message = window.confirm('Are You Sure You Want To Delete This Data?') ;
        if (message) {

            console.log(data.email);
            // console.log(retrieveUsers.email);
            applicant = applicant.reverse().filter((list,i)=>i !== index);
            retrieveUsers = retrieveUsers.filter((list)=> data.email !==list.email)
            console.log(retrieveUsers);


        }
        setApplicants(applicant.reverse())
    }

    useEffect(()=>{
        localStorage.setItem('ApplicantRecord',JSON.stringify(applicants));
        localStorage.setItem('Users',JSON.stringify(retrieveUsers));
    },[applicants])
   
  return (
    <>
    <div className='applicantList'>
        {
            applicants.slice(loadMore).reverse().map((applicant,index)=>{
                return(
                    <div className='applicant'>
                        <div className='profile'>
                            <div className='title'>
                                {(applicant.gender==="F")? <img src={female} alt=""/>:<img src={male} alt=""/>}

                                <div className='info'>
                                    <p className='name'>{applicant.fname} {applicant.lname}</p>
                                    <p className='exp'>{applicant.experience} with {applicant.yearsOfExp} yr(s) of experience</p>
                                </div>
                            </div>
                            <div className='otherInfo'>
                                <div className='skills'>
                                    <span><BackupTableIcon/> {applicant.skills.map(skill=>skill+", " )}</span>
                                    <span><CandlestickChartIcon/> {(applicant.job)? applicant.job:"none"}</span>
                                    <span><SchoolIcon/> {applicant.school ? applicant.school : "none"}</span>
                                </div>
                                <div className='buttons'>
                                {isLogin?<button onClick={()=>{handleBtn(applicant)}}>See Profile</button>:null}
                                {!isLogin?<button onClick={()=>signinBtn(applicant)}>Sign in to see full profile</button>:null}
                                <button>Portfolio Link</button>
                                {isAdmin?<button onClick={()=>handleDelete(applicant,index)}>Delete This Data</button>:null}
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
                
            )
        }
        <button className="loadBtn" disabled={loadMore<=0} onClick={()=>setLoadMore(loadMore-5)}>Load More <i class="fa-solid fa-arrow-down"></i></button>
    </div>
    </>
  )
}

export default ApplicantList