import React, { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../network/api';
import { authContext } from '../../store/AuthContext';
import ReCAPTCHA from "react-google-recaptcha";
import "./style.css"

function Login() {
    const [verified, setVerified] = useState(false)
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    const navigate = useNavigate();
    const userLogin = () => {
        let user = {
            email: 'chagatay.yildiz@code.edu.az',
            password: '123'
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

    return (<>
        {/* <button onClick={() => userLogin()}>Login</button> */}
        <div className='container'>
            <div className='formContainer'>
                <h1>Login Form</h1>
                <form action="https://validation-microservice.onrender.com/recaptcha/verify" method='POST' className='form'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" id='password' />
                    </div>
                    <ReCAPTCHA
                        sitekey="6LcLWlQkAAAAAGGhFyk-RueqPwr4haYD1c8eWpmW"
                        onChange={onChange}
                    />
                    <button className='submitBtn' onClick={() => userLogin()} type='submit' >Submit</button>
                </form>
            </div>
        </div>
    </>)
}

export default Login