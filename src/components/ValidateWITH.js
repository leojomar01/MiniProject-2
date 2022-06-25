import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import applicantRecord from '../JSON/applicantRecord';

//css
// import '../css/forms.css'



let retrieveApplicantData;
retrieveApplicantData = localStorage.getItem('ApplicantRecord')?JSON.parse(localStorage.getItem('ApplicantRecord')): retrieveApplicantData = applicantRecord;
function Validate() {
    const [errors, setErrors] = useState({});
    const [formUser, setFormUser] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", job: "" });
    const [users, setUsers] = useState([]);
    const applicants = retrieveApplicantData;



  
    const handleSubmit = (e) => {
      
      const newApplicant = {
        fname:formUser.firstName,
        lname:formUser.lastName,
        email:formUser.email,
        skills:[],
        yearsOfExp:1,
        experience:"",
        profile:"https://robohash.org/odionumquamlibero.png?size=100x100&set=set1",
        school:null,
        job:formUser.job
      };

      applicants.push(newApplicant);
      console.log(applicants)
      localStorage.setItem('ApplicantRecord',JSON.stringify(applicants))
      console.log("saving...", formUser.firstName,newApplicant);
      users.push(formUser);
      localStorage.setItem("Users", JSON.stringify(users));
      this.target.reset()
      
    };

    const checkValidEmail = (email) => {
        const regRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!regRegex.test(email)){
            return `Invalid email format`;
        } else if (
            users.length > 0 &&
            users.filter((user) => user.email === email).length > 0
          ) {
            return `Email already exists. Sign in instead`;
          } else {
          return "";
        }
    }

    const checkPasswordFormat = (password) => {
        if(password.length < 4) {
            return `Password must be more than 4 characters`
        } 
        return "";
    }

    const checkMatchPassword = (password, confirmPassword) => {
        if (
            confirmPassword !== password
        ) {
            return `Passwords did not match`;
        }
        return "";
    }
  
    const validate = (e) => {
      setErrors({
        firstNameError:
          formUser.firstName === ""
            ? "First Name is required."
            : "",

        lastNameError: 
            formUser.lastName === "" 
            ? "Last Name is required." 
            : "",

        emailError:
            formUser.email === ""
            ? "Email is required."
            : checkValidEmail(formUser.email),  
            
        passwordError:
            formUser.password === ""
            ? "Password is required."
            : checkPasswordFormat(formUser.password),

        confirmPasswordError:
            formUser.confirmPassword === ""
            ? "Password confirmation is required."
            : checkMatchPassword(formUser.password,formUser.confirmPassword),
            
        jobError:
            formUser.job === ""
            ? "Job is required."
            : "",
      });
    };
    
    useEffect(()=>{
      localStorage.setItem('ApplicantRecord',JSON.stringify(applicants))
    });
    useEffect(() => {
      const storedUsers = localStorage.getItem("Users")
        ? JSON.parse(localStorage.getItem("Users"))
        : [];
      setUsers(storedUsers);
    }, []);
  
    useEffect(() => {
      if (errors.firstNameError === "" && errors.lastNameError === "" && errors.emailError === "" && errors.passwordError === "" && errors.confirmPasswordError === "" && errors.jobError === "")
        handleSubmit();
        // eslint-disable-next-line
    }, [errors]);
  
    const handleChange = (e) => {
      setFormUser({ ...formUser, [e.target.name]: e.target.value });
    };
  
    return (
      <div className="formValidate">
        <h1>Registration</h1>
        {/* First Name */}
        <label htmlFor= "firstName">First Name</label><br />
        <input
          name="firstName"
          type="text"
          placeholder="first name"
          onChange={handleChange}
          autoComplete="off"
        /><br />
        <p className="errorMsg">{errors.firstNameError}</p>

        {/* Last Name */}
        <label htmlFor= "lastName">Last Name</label><br />
        <input
          name="lastName"
          type="text"
          onChange={handleChange}
          autoComplete="off"
        /><br />
        <p className="errorMsg">{errors.lastNameError}</p>

        {/* Email */}
        <label htmlFor= "email">Email</label><br />
         <input
          name="email"
          type="email"
          onChange={handleChange}
          autoComplete="off"
        /><br />
        <p className="errorMsg">{errors.emailError}</p>

        {/* Password */}
        <label htmlFor= "password">Password</label><br />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          autoComplete="off"
        /><br />
        <p className="errorMsg">{errors.passwordError}</p>

         {/* Confirm Password */}
         <label htmlFor= "confirmPassword">Confirm Password</label><br />
         <input
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          autoComplete="off"
        /><br />
        <p className="errorMsg">{errors.confirmPasswordError}</p>

        {/* Job */}
        <input
          name="job"
          type="text"
          onChange={handleChange}
          autoComplete="off"
        /><br />
         <p className="errorMsg">{errors.jobError}</p>
  
        <Button variant="contained" onClick={validate} className="loginBtn">Register</Button>
      </div>
    );
}

export default Validate;