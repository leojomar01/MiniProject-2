import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
//css
import '../css/forms.css'

function Validate() {
    const [errors, setErrors] = useState({});
    const [formUser, setFormUser] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", job: "" });
    const [users, setUsers] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
  
    const handleSubmit = (e) => {
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
      <div className="formValidate">
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
        <Button variant="contained" onClick={validate} className="validateBtn">Register</Button>
      </div>
    );
}

export default Validate;