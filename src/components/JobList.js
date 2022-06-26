import React, { useState,useEffect} from 'react';
import '../css/JobList.css';  
import JobRecord from '../JSON/companyRecord';
import {useNavigate} from 'react-router-dom';
import Navbar from "./Navbar";


let retrieveJobRecord;
retrieveJobRecord = localStorage.getItem('JobRecord')? JSON.parse(localStorage.getItem('JobRecord')):retrieveJobRecord = JobRecord;
let isAdmin=localStorage.getItem('isAdmin')?JSON.parse(localStorage.getItem('isAdmin')):false;
let isLogin = localStorage.getItem('isActive')?JSON.parse(localStorage.getItem('isActive')):false;


let accounts =localStorage.getItem('ApplicantRecord')?JSON.parse(localStorage.getItem('ApplicantRecord')):[];
let loginEmail = localStorage.getItem('LoginEmail')?JSON.parse(localStorage.getItem('LoginEmail')):[];
let acctLogin = [{fname:"Admin"}];

if(loginEmail!=="admin"){
  acctLogin = accounts.filter(account=>account.email === loginEmail);
}
// console.log(acctLogin[0].firstName);
const JobList = () => {
  console.log(retrieveJobRecord)
  
  const [jobs,setJobs]=useState(retrieveJobRecord);
  const [loadMore , setLoadMore] = useState(jobs.length-8);
  const navigate = useNavigate();


  const handleOnClick = (job) => {navigate('/CompanyInfo',{state:job})};
  const handlePostAJob = () =>navigate('/PostAJob');

  const handleDelete=(index)=>{
    let job = jobs;
    let message = window.confirm('Are You Sure You Want To Delete This Data?') ;
    if (message) {
      job = job.reverse().filter((list,i)=>i !== index);
    }
    setJobs(job.reverse())
  }
  useEffect(()=>{
    localStorage.setItem('JobRecord',JSON.stringify(jobs));
},[jobs])
 
  return (
    <>
    <Navbar/>
    <div className='JobList'>
      <div className='container'>
            {
            isLogin?
            <div className="profile-card">
              <div className='img-box'>
                {(acctLogin[0].gender==="F")? <img src="../images/f.jpg" alt=""/>:<img src="../images/m.png" alt=""/>}
              </div>
              <div>
                <p>Welcome</p>
                <h1>{acctLogin[0].fname} {acctLogin[0].lname}</h1>
                <p>Full Stack Developer</p>
              </div>
              <div className='profile-status'>
                <h3>Profile Complete <span>100%</span></h3>
              </div>
              <div className='current-proj'>
                <h3>Current Project</h3>
                <span>X Company</span>
              </div>
              <div className='complete-proj'>
                <h3>Completed Project</h3>
                <span> 9 </span>
              </div>
              <div className='hours'>
                <h3>Hours per week</h3>
                <span>More than 30 hrs per week</span>
              </div>
              <div className='buttons'>
                <button onClick={()=>handlePostAJob()}>Post A job</button>
              </div>
            </div>
            :null
            }
            

            <div className='job-card'>
            {
              jobs.slice(loadMore).reverse().map((job,index)=>{
                return (
                  
                    <div className='card'>
                      
                      <span className='position' >{job.position} Position</span>
                      <span className='title'   onClick={()=>handleOnClick(job)} >{job.job}</span>
                      <span className='sal'>{(job.salStart===null)?"Undisclosed":(job.salStart<=200)? (job.salStart*10)+",000 - "+(job.salEnd*10)+",000" : (job.salStart*1)+" - "+(job.salEnd)}{console.log(job.salStart)}</span>
                      <span className='intro'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem culpa doloribus impedit iusto! Iure, vitae illum quisquam magni numquam similique, autem ducimus veniam, nobis eligendi quasi corporis dolorem doloribus non!</span>
                      <span className='skills'>Skills needed : {job.skills.map((skill)=><p>{skill}</p>)}</span>
                      {isAdmin?<button onClick={()=>handleDelete(index)}>Delete</button>:null}
                  </div>
                
              )
              }) 
            }
            </div>
      </div>
      <div className='load-btn'>
        <button className='buttons' disabled={loadMore<=0} onClick={()=>setLoadMore(loadMore-6)}>Load More<i class="fa-solid fa-arrow-down"></i></button>
      </div>      
    </div>
    </>  
   
  )
}

export default JobList