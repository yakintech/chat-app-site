import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../network/api';
import { authContext } from '../../store/AuthContext';
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {
    TextField,
    Box,
    Container,
    Typography,
    Button
} from '@mui/material';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(3).max(32).required(),
}).required();

function Login() {
    const [verified, setVerified] = useState("")
    const [email, setEmail] = useState('chagatay.yildiz@code.edu.az')
    const [password, setPassword] = useState('12345678')
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(value)
    }
    const navigate = useNavigate();
    const userLogin = () => {
        let user = {
            email,
            password,
            response: verified
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

    const onSubmit = data => {
        userLogin()
        console.log(data)
    };
    const emailHandler = event => {
        setEmail(event.target.value)
    }

    const passwordHandler = event => {
        setPassword(event.target.value)
    }

    return (<>
        {/* <button onClick={() => userLogin()}>Login</button> */}
        <Container component="main" maxWidth="xs" style={{ margin: "75px auto" }}>
            <form method='POST' className='form' onSubmit={handleSubmit(onSubmit)}>
                <Box
                    sx={{
                        boxShadow: '0px 0px 30px 0px darkblue',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        gap: "10px",
                        width: "100%",
                        height: "75vh",
                        padding: '0 36px',
                        borderRadius: "15px"
                    }}
                >
                    <Typography component="h1" variant="h5" textAlign={"center"} fontWeight={"bold"} color="primary">
                        Login
                    </Typography>
                    <TextField
                        autoFocus
                        margin="normal"
                        autoComplete='email'
                        label="email"
                        variant="outlined"
                        fullWidth
                        {...register("email")}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                        onChange={emailHandler}

                    />
                    <TextField
                        autoFocus
                        margin="normal"
                        autoComplete='password'
                        label="password"
                        variant="outlined"
                        fullWidth
                        {...register("password")}
                        error={!!errors?.password}
                        helperText={errors?.password ? errors.password.message : null}
                        onChange={passwordHandler}

                    />
                    <ReCAPTCHA
                        style={{ margin: " 0 auto" }}
                        sitekey="6Lf4UogkAAAAAJwL3aobfuyiymu12TZOEaze7HlW"
                        onChange={onChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, p: 2 }}
                    >Submit</Button>
                </Box>
            </form>
        </Container>
    </>)
}

export default Login;
