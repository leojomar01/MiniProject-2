import { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import loginImg from '../assets/login.png'
import Button from '@mui/material/Button';

//css
// import './css/login.css'

const retrieveRegEntries = localStorage.getItem('Entries') ? JSON.parse(localStorage.getItem('Entries')) : ['']; 
function Validate() {

    const regInitialValues = { fName: "", lName: "", email: "", password: "", cPassword: "", job: ""}; //setInitialValues
    const [regValues, setRegValues] = useState(regInitialValues); //setFormValues
    // eslint-disable-next-line
    const [regFormErrors, setRegFormErrors] = useState({}); //SetFormErrors
    const [isRegSubmit, setIsRegSubmit] = useState(false); //isSubmit
    const [allRegEntries, setAllRegEntries] = useState(retrieveRegEntries);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegValues({ ...regValues, [name]: value});
        console.log(`setRegValues from handleChange`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegFormErrors(displayError(regValues));
        setIsRegSubmit(true);
        setAllRegEntries([...allRegEntries,regValues]);
        // setRegValues('');
    };

    useEffect(() => {
        if (Object.keys(regFormErrors).length === 0 && isRegSubmit) {
            localStorage.setItem('Entries', JSON.stringify(allRegEntries));
            console.log(allRegEntries);
        } // eslint-disable-next-line
    }, [regFormErrors]);

    const displayError = (values) => {
        const regErrors = {};
        const regRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        const regEmailInput = regValues.email;
        console.log(regEmailInput);
        const getRegEntries = JSON.parse(localStorage.getItem("Entries"));
        const filteredRegEntries = getRegEntries.filter((item) => {
            return regEmailInput === item.email;
        });
        console.log(filteredRegEntries);
       

        //conditional statements 
            // for syntax 
        if (!values.fName){
            regErrors.fName = "Please provide your first name."
        }

        if (!values.lName){
            regErrors.lName = "Please provide your last name."
        }

        if (!values.email){
            regErrors.email = "Please provide an email."
        } else if (!regRegex.test(values.email)){
            regErrors.email = "Please provide a valid email format.";
        } 

        if (!values.password){
            regErrors.password = "Please provide a password.";
        } else if (values.password.length < 4) {
            regErrors.password = "Password must be more than 4 characters";
        }

        if (!values.cPassword){
            regErrors.cPassword = "Please confirm your password.";
        } else if (values.cPassword !== values.password){
            regErrors.cPassword = "Passwords did not match."
        }

        if (!values.job){
            regErrors.job = "Please provide your job."
        }

        if (filteredRegEntries.length > 0){
            regErrors.filteredRegEntries = "Email is already registered. Login instead.";
            console.log(`filteredRegEntries`)
        } 
        console.log(`checking validate function ${regErrors}`);
        return regErrors;
    }


    return (
        <div className="container">
             {Object.keys(regFormErrors).length === 0 && isRegSubmit ? (
                            console.log('proceed to login')
                        ) : (
                            console.log('login error')
                        )}

            <Box sx={{ flexGrow: 1 }} className="boxContainer">
            <Grid container spacing={0}>
                <Grid item xs={6} className="loginImgGrid">
                    {/* <img src={loginImg} alt="" className="loginImg"/> */}
                </Grid>
                <Grid item xs={6} className="loginFormGrid">
                    <h1 className="loginName">Register Example</h1>
                    <form className="loginForm" onSubmit={handleSubmit} noValidate>

                        <label htmlFor="fName" className="fName">First Name</label>
                        <input 
                            type="text" 
                            name="fName"  
                            value={regValues.fName}
                            onChange={handleChange}
                            autoComplete="off"/><br />
                        <p className="errorMsg">{regFormErrors.fName}</p>

                        <label htmlFor="lName" className="lName">Last Name</label>
                        <input 
                            type="text" 
                            name="lName" 
                            value={regValues.lName}
                            onChange={handleChange}
                            autoComplete="off"/><br />
                        <p className="errorMsg">{regFormErrors.lName}</p>


                        <label htmlFor="email" className="emailLabel">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={regValues.email}
                            onChange={handleChange}
                            autoComplete="off"/><br />
                        <p className="errorMsg">{regFormErrors.email}</p>

                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={regValues.password}
                            onChange={handleChange}
                            autoComplete="off" />
                        <p className="errorMsg">{regFormErrors.password}</p>


                        <label htmlFor="cPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            name="cPassword" 
                            value={regValues.cPassword}
                            onChange={handleChange}
                            autoComplete="off" />
                        <p className="errorMsg">{regFormErrors.cPassword}</p>

                        <label htmlFor="job">Job</label>
                        <input 
                            type="text" 
                            name="job" 
                            value={regValues.job}
                            onChange={handleChange}
                            autoComplete="off" />
                        <p className="errorMsg">{regFormErrors.job}</p>
                        <br />
                        
                        


                        <p className="errorMsg">{regFormErrors.filteredRegEntries}</p>
                        <Button variant="contained" type="submit" className="loginBtn">Register</Button>

                       
                        <br /> <br />
                        {/* <Link to = "/registration">Not yet a member?</Link> */}
                    </form>
                </Grid>
            </Grid>
            </Box>
        </div>
      );
}

export default Validate