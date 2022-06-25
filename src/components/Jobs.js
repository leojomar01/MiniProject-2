import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
<<<<<<< HEAD
import Header from './Header';
import JobRecord from '../JSON/companyRecord';
// import { useNavigate } from 'react-router-dom';


//css
import '../css/forms.css'



let retrieveJobRecord;
retrieveJobRecord = localStorage.getItem('JobRecord')? JSON.parse(localStorage.getItem('JobRecord')):retrieveJobRecord = JobRecord;

function Jobs() {
    const [errors, setErrors] = useState({});
    const [formJob, setFormJob] = useState({ position: "", jobTitle: "", company: "", skills: "", startSalary: 0, endSalary: 0, email: ""});
    const [jobs, setJobs] = useState(retrieveJobRecord);
    const [isSuccess, setIsSuccess] = useState(false);
    // const navigate = useNavigate();

  
    const handleSubmit = (e) => {
      console.log("saving...", formJob);
      let newJob = {
        email:"emal@mail.m",
        company:formJob.company,
        job:formJob.jobTitle,
        skills:[formJob.skills],
        salstart:parseInt(formJob.startSalary),
        salEnd:parseInt(formJob.endSalary),
        position:formJob.position
      }
      console.log(newJob);
      setJobs([...jobs,newJob])
      // jobs.push(newJob);
      // console.log(jobs);
      // localStorage.setItem('JobRecord',JSON.stringify(jobs));
      // jobOffers.push(newJob);
      // localStorage.setItem("JobRecord", JSON.stringify(jobOffers));
      setIsSuccess(true);
      alert("Registered Successfully!")
      window.location.reload(true)
      // navigate('/');

      
      
    };
    useEffect(() => {
      localStorage.setItem('JobRecord',JSON.stringify(jobs));
    }, [jobs]);
=======
//css
import '../css/forms.css'

function Jobs() {
    const [errors, setErrors] = useState({});
    const [formJob, setFormJob] = useState({ position: "", jobTitle: "", company: "", skills: "", startSalary: "", endSalary: "", email: ""});
    const [jobOffers, setJobOffers] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
  
    const handleSubmit = (e) => {
      console.log("saving...", formJob);
      jobOffers.push(formJob);
      localStorage.setItem("Jobs", JSON.stringify(jobOffers));
      setIsSuccess(true);
    };
>>>>>>> c240c5008d2921ab6f91015d3f83580c3b3d6030

    const checkValidEmail = (email) => {
        const regRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!regRegex.test(email)){
            return `Invalid email format`;
        } 
    }


    const validate = (e) => {
      setErrors({
        jobTitleError:
          formJob.jobTitle === ""
            ? "Job Title is required."
            : "",

        companyError: 
            formJob.company === "" 
            ? "Company is required." 
            : "",

        skillsError: 
            formJob.skills === "" 
            ? "At least one skill is needed." 
            : "",

        positionError: 
            formJob.position < 1
            ? "At least one position is needed." 
            : "",

        emailError:
            formJob.email !== ""
            ? checkValidEmail(formJob.email)
            : "",
            
      });
    };
  
<<<<<<< HEAD
   
=======
    useEffect(() => {
      const storedJobs = localStorage.getItem("Jobs")
        ? JSON.parse(localStorage.getItem("Jobs"))
        : [];
      setJobOffers(storedJobs);
    }, []);
>>>>>>> c240c5008d2921ab6f91015d3f83580c3b3d6030
  
    useEffect(() => {
      if (errors.jobTitleError === "" && errors.companyError === "" && errors.skillsError === "" && errors.positionError === "")
        handleSubmit();
        // eslint-disable-next-line
    }, [errors]);
  
    const handleChange = (e) => {
      setFormJob({ ...formJob, [e.target.name]: e.target.value });
    };
  return (
<<<<<<< HEAD
    <div>
      <Header/>
      <div className="formJobs">
=======
    <div className="formJobs">
>>>>>>> c240c5008d2921ab6f91015d3f83580c3b3d6030
         <h1 className="formJobsName">Post a Job</h1>
        {/* Job Title */}
        <label htmlFor= "jobTitle">Job Title</label>
        <input
          name="jobTitle"
          type="text"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
        />
        <p className="errorMsg">{errors.jobTitleError}</p>

        {/* Company */}
        <label htmlFor= "company">Company</label>
        <input
          name="company"
          type="text"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
        />
        <p className="errorMsg">{errors.companyError}</p>

        {/* Skills */}
        <label htmlFor= "skills">Skills</label>
        <input
          name="skills"
          type="text"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
        />
        <p className="errorMsg">{errors.skillsError}</p>

        <label htmlFor= "position">Number of Positions Available</label>
        <input
          name="position"
          type="number"
          className="formInput"
          placeholder="Input number here"
          onChange={handleChange}
          autoComplete="off"
        />
        <p className="errorMsg">{errors.positionError}</p>

        <label htmlFor= "position">Start Salary</label>
        <input
          name="startSalary"
          type="number"
          className="formInput"
          placeholder="Php"
          onChange={handleChange}
          autoComplete="off"
        />

        <label htmlFor= "position" className="labelOptional">End Salary</label>
        <input
          name="endSalary"
          type="number"
          className="formInput"
          placeholder="Php"
          onChange={handleChange}
          autoComplete="off"
        />
        

        {/* Email */}
<<<<<<< HEAD
        {/* <label htmlFor= "email" className="labelOptional">Email</label>
=======
        <label htmlFor= "email" className="labelOptional">Email</label>
>>>>>>> c240c5008d2921ab6f91015d3f83580c3b3d6030
         <input
          name="email"
          type="email"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
        />
<<<<<<< HEAD
        <p className="errorMsg">{errors.emailError}</p> */}
=======
        <p className="errorMsg">{errors.emailError}</p>
>>>>>>> c240c5008d2921ab6f91015d3f83580c3b3d6030
  
        {isSuccess && <p className="successMsg">Registered Successfully!</p>}
        <Button variant="contained" onClick={validate} className="jobsBtn">Post a Job</Button>
    </div>
<<<<<<< HEAD
    </div>
=======
>>>>>>> c240c5008d2921ab6f91015d3f83580c3b3d6030
  )
}

export default Jobs