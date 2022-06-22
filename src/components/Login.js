import { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import loginImg from '../assets/login.png'
import Button from '@mui/material/Button';

//css
// import './css/login.css'


function Login() {

    const initialValues = { email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        } // eslint-disable-next-line
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        //local storage validation
        const emailInput = formValues.email;
        const passwordInput = formValues.password;
        console.log(passwordInput);
        const getEntries = JSON.parse(localStorage.getItem("Entries"));
        const filteredEntries = getEntries.filter((item) => {
            return emailInput === item.email && passwordInput === item.password;
        });
        console.log(filteredEntries);

        //conditional statements 
            // for syntax 
        if (!values.email){
            errors.email = "Please provide an email."
        } else if (!regex.test(values.email)){
            errors.email = "Please provide a valid email format.";
        } 

        if (!values.password){
            errors.password = "Please provide a password.";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }

        if (filteredEntries.length === 0){
            errors.filteredEntries = "Invalid Email/password";
            console.log(`error`)
        } 
        console.log(`checking validate function ${errors}`);
        return errors;
    }


    return (
        <div className="container">
             {Object.keys(formErrors).length === 0 && isSubmit ? (
                            console.log('proceed to home')
                        ) : (
                            console.log('login error')
                        )}

            <Box sx={{ flexGrow: 1 }} className="boxContainer">
            <Grid container spacing={0}>
                <Grid item xs={6} className="loginImgGrid">
                    {/* <img src={loginImg} alt="" className="loginImg"/> */}
                </Grid>
                <Grid item xs={6} className="loginFormGrid">
                    <h1 className="loginName">Login</h1>
                    <form className="loginForm" onSubmit={handleSubmit} noValidate>
                        <label htmlFor="email" className="emailLabel"><h2 className="emailH3">Email</h2></label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={formValues.email}
                            onChange={handleChange}
                            autocomplete="off"/><br />
                        <p className="errorEmail">{formErrors.email}</p>

                        <label htmlFor="password"><h2 className="passwordH3">Password</h2></label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            value={formValues.password}
                            onChange={handleChange}
                            autocomplete="off" />
                        <p className="errorPassword">{formErrors.password}</p>
                        <br />
                        <p className="errorMsg">{formErrors.filteredEntries}</p>
                        <Button variant="contained" type="submit" className="loginBtn">LOGIN</Button>

                       
                        <br /> <br />
                        {/* <Link to = "/registration">Not yet a member?</Link> */}
                    </form>
                </Grid>
            </Grid>
            </Box>
        </div>
      );
}

export default Login