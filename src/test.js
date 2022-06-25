
import React, {useState} from 'react';
import '../App.css';
import signIn from '../images/sign-in.svg'

const SignUp = () => {


    //assigning states
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errorfName, seterrorfName] = useState(false);
    const [errorlName, seterrorlName] = useState(false);
    const [errorEmail, seterrorEmail] = useState(false);
    const [errorPassword, seterrorPassword] = useState(false);
    const [agree, setAgree] = useState(false);
    const [errorAgree, setErrorAgree] = useState('');
    

    //function for changing the state of the checkbox (terms and conditions)
    const checkboxHandler = () => {
        setAgree(!agree);
        console.log(agree)
    }


    const submitSignUp = (e) => {

        e.preventDefault();


        //function for validation of first name
        const handleSubmitFname = () => {
            

            if(fName.trim() === '') {
                seterrorfName('First name must not be empty!')
            } else {
                let i;
                for (i = 0; i < fName.length; i++) {
                    localStorage.setItem('first_name', fName)
                }
            }
        }

        //function for validation of last name
        const handleSubmitLname = () => {
            e.preventDefault();
            if(lName.trim() === '') {
                seterrorlName('Last name must not be empty!')
            } else {
                localStorage.setItem('lName', lName)
            }
        }


        //function for validation of email
        const handleSubmitEmail = () => {
            e.preventDefault();
            if(email.trim() === '') {
                seterrorEmail('Email must not be empty!')
            } else {
                localStorage.setItem('email', email)
            }
        }

        //function for validation of password
        const handleSubmitPassword = () => {
            e.preventDefault();
            if (password.trim() === '') {
                seterrorPassword('Password must not be empty!')
            } else if (password !== password2) {
                seterrorPassword('Passwords don\'t match!')
            } else if (password.length < 5) {
                seterrorPassword('Password must be minimum of 5 characters!')
            } else if (password.search(/[0-9]/) < 0) {
                seterrorPassword('Password must contain at least one number!')
            } else if (password === password2) {
                localStorage.setItem('password', password)
            } 
        }

        //function for validation if the user agrees to the terms and conditions
        const handleSubmitAgreement = () => {
            if (agree === false) {
                setErrorAgree('You must agree to the terms and conditions!')
            } else {
                localStorage.setItem('agreed', 'agreed')
            }
        }
        //function to toggle modal
        const toggleModal = () => {
            if (fName !== '' && lName !== '' && email !== '' && password === password2 && agree === true) {
                alert('Yehey. Proceed sa next step di na ka mastress!')
            } else {
                alert('There are errors! Please double check the fields!')
            }
        }
    
        //calling functions
        handleSubmitFname();
        handleSubmitLname();
        handleSubmitEmail();
        handleSubmitPassword();
        handleSubmitAgreement();
        toggleModal();
    }
  return (


        <div className='signup-body'>
        <div className='main1'>
            <div className='main-content'>
            <h1>IT'S AS <br/> EASY <br/> AS <br/> ONE, TWO, <br /> THREE!</h1>

                <div className='form-maindiv'>
                    <form onSubmit={submitSignUp}>
                        <div className='form-row'><label>Enter First Name:</label>{errorfName ? (<span className='errorSpan'>{errorfName}</span>) : (null)}<br />
                        <input type='text' className='input1' onChange={(e) => setFName(e.target.value)} /></div>

                        <div className='form-row'><label>Enter Last Name:</label>{errorlName ? (<span className='errorSpan'>{errorlName}</span>) : (null)}<br />
                        <input type='text' className='input1'  onChange={(e) => setLName(e.target.value)} /></div>

                        <div className='form-row'><label>Email:</label>{errorEmail ? (<span className='errorSpan'>{errorEmail}</span>) : (null)}<br />
                        <input type='email' className='input1'  onChange={(e) => setEmail(e.target.value)} /></div>

                        <div className='form-row'><label>Password:</label>{errorPassword ? (<span className='errorSpan'>{errorPassword}</span>) : (null)}<br />
                        <input type='password' className='input1' onChange={(e) => setPassword(e.target.value)} /></div>

                        <div className='form-row'><label>Retype Password:</label><br />
                        <input type='password' className='input1'  onChange={(e) => setPassword2(e.target.value)}/></div>

                        <div className='mainDivCheckbox'><input type='checkbox' onChange={checkboxHandler}/><label for='checkbox'>Agree to the terms and conditions</label>{agree ? (null) : (<span className='errorSpan'>{errorAgree}</span>)}</div>

                        <button type='submit'>Create my account</button>
                        <div><span>Already have an account? <a>Try logging in.</a></span></div>

                        
                    </form>
                </div>
            </div>
            <img src={signIn} className="imageSignIn"/>
        </div>
        </div>
  )
}

export default SignUp
