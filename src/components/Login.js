import { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import loginImg from '../assets/login.png'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

//css
import '../css/forms.css'

let loginData = localStorage.getItem("Users")? JSON.parse(localStorage.getItem("Users")):[];
function Login() {
    const initialValues = { email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        

    }
    const handleToReg = ()=>{
        navigate('/Register');
    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            // alert(formValues.email);
            localStorage.setItem("isActive", JSON.stringify(true));
            localStorage.setItem("LoginEmail", JSON.stringify(formValues.email));
            navigate('/');
            window.location.reload(true);

        } // eslint-disable-next-line
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const emailInput = formValues.email;
        const passwordInput = formValues.password;
        const getEntries = loginData;

        const filteredEntries = getEntries.filter((item) => {
            return emailInput === item.email && passwordInput === item.password;
        });






        if(emailInput === "admin" && passwordInput === "admin"){
            localStorage.setItem("isAdmin", JSON.stringify(true));
            return errors;

        }
        else{
            
            if (!values.email){
                errors.email = `Please provide an email.`
            } else if (!regex.test(values.email)){
                errors.email = "Please provide a valid email format.";
            } 
            if (!values.password){
                errors.password = "Please provide a password.";
            } else if (values.password.length < 4) {
                errors.password = "Password must be more than 4 characters";
            }
            if (filteredEntries.length === 0){
                errors.filteredEntries = "Record not found";
                console.log(`error`)
            } 
            return errors;
        }


        


        
    }


    return (
        <div className="formLogin">
            <Box sx={{ flexGrow: 1 }} className="boxContainer">
            <Grid container spacing={0}>
                <Grid item xs={6} className="loginImgGrid">
                    <img src={loginImg} alt="" className="loginImg"/>
                </Grid>
                <Grid item xs={6} className="loginFormGrid">
                    <h1 className="formLoginName">Login</h1>
                    <form className="loginForm" onSubmit={handleSubmit} noValidate>
                        <label htmlFor="email" className="emailLabel"><h2 className="loginLabels">Email</h2></label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="formInput"
                            value={formValues.email}
                            onChange={handleChange}
                            autoComplete="off"/><br />
                        <p className="errorMsg">{formErrors.email}</p>

                        <label htmlFor="password"><h2 className="loginLabels loginLabelPassword">Password</h2></label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="formInput"
                            value={formValues.password}
                            onChange={handleChange}
                            autoComplete="off" />
                        <p className="errorMsg">{formErrors.password}</p>
                        <br />
                        <p className="errorMsg">{formErrors.filteredEntries}</p>
                        {Object.keys(formErrors).length === 0 && isSubmit ? (
                            <p className="successMsg">Signed in successfully</p>
                        ) : (
                            console.log('login error')
                        )}
                        <Button variant="contained" type="submit" className="loginBtn">LOGIN</Button>

                            
                        <br /> <br />
                        <span>Not yet a member? <p onClick={()=>{handleToReg()}} className='loginToRegister'>click here to register</p></span>
                    </form>
                </Grid>
            </Grid>
            </Box>
        </div>
      );
}

export default Login