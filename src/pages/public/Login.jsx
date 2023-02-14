import React, { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../network/api';
import { authContext } from '../../store/AuthContext';
import ReCAPTCHA from "react-google-recaptcha";
import "./style.css"

function Login() {
    const [verified, setVerified] = useState("")
    const [email, setEmail] = useState('chagatay.yildiz@code.edu.az')
    const [password, setPassword] = useState('123')
    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(value)
    }
    const navigate = useNavigate();
    const userLogin = () => {
        let user = {
            email,
            password,
            response:verified
        }

        api.add('/webusers/login', user)
            .then(res => {
                navigate('confirmCode', { state: { webUserId: res._id } })
            })
            .catch(err => {
                console.log('Err', err);
                alert('Email or password invalid!')
            })

    }


    const emailHandler = event =>{
        setEmail(event.target.value)
    }

    const passwordHandler = event => {
        setPassword(event.target.value)
    }

    return (<>
        {/* <button onClick={() => userLogin()}>Login</button> */}
        <div className='container'>
            <div className='formContainer'>
                <h1>Login Form</h1>
                <form  method='POST' className='form'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={emailHandler} type="text" id='email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={passwordHandler} type="text" id='password' />
                    </div>
                    <ReCAPTCHA
                        sitekey="6LcLWlQkAAAAAGGhFyk-RueqPwr4haYD1c8eWpmW"
                        onChange={onChange}
                    />
                    <button className='submitBtn' onClick={(event) =>{
                        event.preventDefault()
                        userLogin()}} type='submit' >Submit</button>
                </form>
            </div>
        </div>
    </>)
}

export default Login