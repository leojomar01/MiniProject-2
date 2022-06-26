import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
//css
import '../css/forms.css'

function EditProfile() {
    const [errors, setErrors] = useState({});
    const [formEdit, setFormEdit] = useState({ fname: "", lname: "", email: "", skills: "", yearsOfExp: "", experience: "", job: "", school: "" });
    const [edits, setEdits] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
  
    const handleSubmit = (e) => {
      console.log("saving...", formEdit);
      edits.push(formEdit);
      localStorage.setItem("Applicants", JSON.stringify(edits)); //change this. idk where to save the editted profile
      setIsSuccess(true);
      
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

        skillsError: 
            formEdit.skills === "" 
            ? "At least one skill is needed." 
            : "",

        yearsOfExpError: 
            formEdit.yearsOfExp < 0
            ? "Input a valid number." 
            : "",

        jobError:
            formEdit.job === ""
            ? "Job is required."
            : "",

        
      });
    };
    

    useEffect(() => {
      const storedEdits = localStorage.getItem("Applicants") //change
        ? JSON.parse(localStorage.getItem("Applicants")) //change
        : [];
      setEdits(storedEdits);
    }, []);
  
    useEffect(() => {
      if (errors.fnameError === "" && errors.lnameError === "" && errors.emailError === ""  && errors.yearsOfExpError && errors.jobError === "")
        handleSubmit();
        // eslint-disable-next-line
    }, [errors]);
  
    const handleChange = (e) => {
      setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
    };




  return (
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
        />
        <p className="errorMsg">{errors.lnameError}</p>

        {/* Email */}
        <label htmlFor= "email">Email</label>
         <input
          name="email"
          type="email"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
        />
        <p className="errorMsg">{errors.emailError}</p>

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

        {/* Years of Experience */}
        <label htmlFor= "yearsOfExp">Years of Experience</label>
        <input
          name="position"
          type="number"
          className="formInput"
          placeholder="Input number here"
          onChange={handleChange}
          autoComplete="off"
        />
        <p className="errorMsg">{errors.yearsOfExp}</p>

         {/*Experience */}
         <label htmlFor= "job">Experience</label>
         <input
          name="experience"
          type="text"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
        />
         <p className="errorMsg">{errors.experienceError}</p>


         {/* Job */}
        <label htmlFor= "job">Job</label>
        <input
          name="job"
          type="text"
          className="formInput"
          placeholder="Optional"
          onChange={handleChange}
          autoComplete="off"
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
        />
         <p className="errorMsg">{errors.schoolError}</p>

         {isSuccess && <p className="successMsg">Registered Successfully!</p>}
        <Button variant="contained" onClick={validate} className="editProfileBtn">Save Changes</Button>
    </div>
  )
}

export default EditProfile