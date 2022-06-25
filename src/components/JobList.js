import React, { useState,useEffect} from 'react';
import '../css/JobList.css';
import JobRecord from '../JSON/companyRecord';
import {useNavigate} from 'react-router-dom';
import Navbar from "./Navbar";


let retrieveJobRecord;
retrieveJobRecord = localStorage.getItem('JobRecord')? JSON.parse(localStorage.getItem('JobRecord')):retrieveJobRecord = JobRecord;
let isAdmin=localStorage.getItem('isAdmin')?JSON.parse(localStorage.getItem('isAdmin')):false;

const JobList = () => {
  console.log(retrieveJobRecord)
  
  const [jobs,setJobs]=useState(retrieveJobRecord);
  const [loadMore , setLoadMore] = useState(jobs.length-8);
  const navigate = useNavigate();


  const handleOnClick = (job) => {navigate('/CompanyInfo',{state:job})};

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
              jobs.slice(loadMore).reverse().map((job,index)=>{
                return (
                <div className='card'>
                  <span className='position' >{job.position} Position</span>
                  <span className='title'   onClick={()=>handleOnClick(job)} >{job.job}</span>
                  <span className='sal'>{(job.salStart===null)?"Undisclosed":(job.salStart<=200)? (job.salStart*10)+",000 - "+(job.salEnd*10)+",000":job.salStart+" - "+job.salEnd}</span>
                  <span className='intro'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem culpa doloribus impedit iusto! Iure, vitae illum quisquam magni numquam similique, autem ducimus veniam, nobis eligendi quasi corporis dolorem doloribus non!</span>
                  <span className='skills'>{job.skills.map((skill)=><p>{skill}</p>)}</span>
                  {isAdmin?<button onClick={()=>handleDelete(index)}>Delete this Data</button>:null}
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