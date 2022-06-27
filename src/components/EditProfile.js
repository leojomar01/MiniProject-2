import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Navbar from './Navbar';
//css
import '../css/editProfile.css';










let accounts =localStorage.getItem('ApplicantRecord')?JSON.parse(localStorage.getItem('ApplicantRecord')):[];
let loginEmail = localStorage.getItem('LoginEmail')?JSON.parse(localStorage.getItem('LoginEmail')):[];
let acctLogin = [{fname:"Admin"}];

if(loginEmail!=="admin"){
  acctLogin = accounts.filter(account=>account.email === loginEmail);
}

function EditProfile() {
    const [errors, setErrors] = useState({});
    const [formEdit, setFormEdit] = useState({ 
      fname:acctLogin[0].fname, 
      lname:acctLogin[0].lname,
       email:acctLogin[0].email, 
       skill1:acctLogin[0].skills[0],
       skill2:acctLogin[0].skills[1],
       skill3:acctLogin[0].skills[2], 
       yearsOfExp:acctLogin[0].yearsOfExp, 
       experience:acctLogin[0].experience, 
       job:acctLogin[0].job, 
       school:acctLogin[0].school 
      });
      
    
    
    
      const [edits, setEdits] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
  
    const handleSubmit = (e) => {
      console.log("saving...", formEdit);
      // edits.push(formEdit);
      // localStorage.setItem("Applicants", JSON.stringify(edits)); //change this. idk where to save the editted profile
      setIsSuccess(true);

      const editedProfile = {
        fname:formEdit.fname,
        lname:formEdit.lname,
        email:formEdit.email,
        skills:[formEdit.skill1, formEdit.skill2, formEdit.skill3],
        yearsOfExp:formEdit.yearsOfExp,
        experience:formEdit.experience,
        job:formEdit.job,
        school:formEdit.school
      }

      accounts = accounts.filter(account=>account.email!== loginEmail);
      accounts.push(editedProfile);
      localStorage.setItem("ApplicantRecord",JSON.stringify(accounts));
      window.location.reload(true);
    };


   


    const checkValidEmail = (email) => {
        const regRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!regRegex.test(email)){
            return `Invalid email format`;
        } else {
          return "";
        }
    }

  
    const validate = (e) => {
      setErrors({
        fnameError:
          formEdit.fname === ""
            ? "First Name is required."
            : "",

        lnameError: 
            formEdit.lname === "" 
            ? "Last Name is required." 
            : "",

        emailError:
            formEdit.email === ""
            ? "Email is required."
            : checkValidEmail(formEdit.email),  


        
      });
    };
    

  
    useEffect(() => {
      if (errors.fnameError === "" && errors.lnameError === "" && errors.emailError === "")
        handleSubmit();
        // eslint-disable-next-line
    }, [errors]);
  
    const handleChange = (e) => {
      setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
    };




  return (
    <div>
      <Navbar/> 
       <div className="formEditProfile">
        <h1 className="formEditProfileName">Edit Profile</h1>
       {/* First Name */}
       <label htmlFor= "fname">First Name</label>
        <input
          name="fname"
          type="text"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].fname}
        />
        <p className="errorMsg">{errors.fnameError}</p>

        {/* Last Name */}
        <label htmlFor= "lname">Last Name</label>
        <input
          name="lname"
          type="text"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].lname}

        />
        <p className="errorMsg">{errors.lnameError}</p>

        {/* Email */}
        {/* <label htmlFor= "email">Email</label>
         <input
          name="email"
          type="email"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].email}

        />
        <p className="errorMsg">{errors.emailError}</p> */}

        {/* Skills */}
        <label htmlFor= "skills">Skills</label>
        <input
          name="skill1"
          type="text"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].skills[0]}

        />
         <input
          name="skill2"
          type="text"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].skills[1]}

        />
         <input
          name="skill3"
          type="text"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].skills[2]}

        />
        <p className="errorMsg">{errors.skillsError}</p>


        {/*Experience */}
        <label htmlFor= "job">Job Experienced</label>
                <input
                  name="experience"
                  type="text"
                  className="formInput"
                  onChange={handleChange}
                  autoComplete="off"
                  defaultValue={acctLogin[0].experience}

        />
         <p className="errorMsg">{errors.experienceError}</p>

        {/* Years of Experience */}
        <label htmlFor= "yearsOfExp">Years of Experience</label>
        <input
          name="yearsOfExp"
          type="number"
          className="formInput"
          placeholder="Input number here"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].yearsOfExp}

        />
        <p className="errorMsg">{errors.yearsOfExp}</p>

        

         {/* Job */}
        <label htmlFor= "job">Current Job</label>
        <input
          name="job"
          type="text"
          className="formInput"
          placeholder="Optional"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].job}

        />
         <p className="errorMsg">{errors.jobError}</p>

          {/* School */}
          <label htmlFor= "job">School</label>
        <input
          name="school"
          type="text"
          className="formInput"
          placeholder="Optional"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].school}

        />
         <p className="errorMsg">{errors.schoolError}</p>

         {isSuccess && <p className="successMsg">Registered Successfully!</p>}
        <Button variant="contained" onClick={handleSubmit} className="editProfileBtn">Save Changes</Button>
    </div>
    </div>
  )
}

export default EditProfile