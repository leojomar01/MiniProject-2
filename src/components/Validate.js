import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
<<<<<<< HEAD
import applicantRecord from '../JSON/applicantRecord';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

//css
import '../css/forms.css'



let retrieveApplicantData;
retrieveApplicantData = localStorage.getItem('ApplicantRecord')?JSON.parse(localStorage.getItem('ApplicantRecord')): retrieveApplicantData = applicantRecord;
=======
//css
import '../css/forms.css'
>>>>>>> c240c5008d2921ab6f91015d3f83580c3b3d6030

function Validate() {
    const [errors, setErrors] = useState({});
    const [formUser, setFormUser] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", job: "" });
    const [users, setUsers] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
<<<<<<< HEAD
    const applicants = retrieveApplicantData;
    const navigate = useNavigate();

    const handleLogin = () =>navigate('/Login');

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
=======
  
    const handleSubmit = (e) => {
>>>>>>> c240c5008d2921ab6f91015d3f83580c3b3d6030
      console.log("saving...", formUser);
      users.push(formUser);
      localStorage.setItem("Users", JSON.stringify(users));
      setIsSuccess(true);
      
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
<<<<<<< HEAD
      <div>
        <Navbar/>
         <div className="formValidate">
=======
      <div className="formValidate">
>>>>>>> c240c5008d2921ab6f91015d3f83580c3b3d6030
        <h1 className="formValidateName">Registration</h1>
        {/* First Name */}
        <label htmlFor= "firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
        />
        <p className="errorMsg">{errors.firstNameError}</p>

        {/* Last Name */}
        <label htmlFor= "lastName">Last Name</label>
        <input
          name="lastName"
          type="text"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
        />
        <p className="errorMsg">{errors.lastNameError}</p>

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

        {/* Password */}
        <label htmlFor= "password">Password</label>
        <input
          name="password"
          type="password"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
        />
        <p className="errorMsg">{errors.passwordError}</p>

         {/* Confirm Password */}
         <label htmlFor= "confirmPassword">Confirm Password</label>
         <input
          name="confirmPassword"
          type="password"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
        />
        <p className="errorMsg">{errors.confirmPasswordError}</p>

        {/* Job */}
        <label htmlFor= "job">Job</label>
        <input
          name="job"
          type="text"
          className="formInput"
          onChange={handleChange}
          autoComplete="off"
        />
         <p className="errorMsg">{errors.jobError}</p>

        {isSuccess && <p className="successMsg">Registered Successfully!</p>}
<<<<<<< HEAD
        <br />
        <Button variant="contained" onClick={validate} className="validateBtn">Register</Button>
        <br />
        <p>Already Have an account? <span className="clickToLogin" onClick={()=>handleLogin()}>Log-In Here</span></p>
      </div>
=======
        <Button variant="contained" onClick={validate} className="validateBtn">Register</Button>
>>>>>>> c240c5008d2921ab6f91015d3f83580c3b3d6030
      </div>
    );
}

export default Validate;