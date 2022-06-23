import React, { useState} from 'react';
import '../css/JobList.css';
import JobRecord from '../JSON/companyRecord';
import {useNavigate} from 'react-router-dom';
import Header from "./Header";


let retrieveJobRecord;
if(!localStorage.getItem('JobRecord')) retrieveJobRecord = JobRecord;

const JobList = () => {
  
  const jobs = retrieveJobRecord;
  const [loadMore , setLoadMore] = useState(jobs.length-8);
  const navigate = useNavigate();
  const handleOnClick = (job) => {navigate('/CompanyInfo',{state:job})};


 
  return (
    <>
    <Header/>
    <div className='JobList'>
      <div className='container'>
            {
              jobs.slice(loadMore).reverse().map((job,index)=>{
                return (
                <div className='card'  onClick={()=>handleOnClick(job)}>
                  <span className='position'>{job.position} Position</span>
                  <span className='title'>{job.job}</span>
                  <span className='sal'>{job.salStart? (job.salStart*10)+",000 - "+(job.salEnd*10)+",000":"Undisclosed"}</span>
                  <span className='intro'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem culpa doloribus impedit iusto! Iure, vitae illum quisquam magni numquam similique, autem ducimus veniam, nobis eligendi quasi corporis dolorem doloribus non!</span>
                  <span className='skills'>{job.skills.map((skill)=><p>{skill}</p>)}</span>
                </div>
              )
              })
            }
      </div>
      <button className='buttons' disabled={loadMore<=0} onClick={()=>setLoadMore(loadMore-6)}>Load More</button>
    </div>
    </>  
   
  )
}

export default JobList