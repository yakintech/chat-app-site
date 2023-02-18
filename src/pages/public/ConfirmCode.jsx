import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { api } from '../../network/api'
import { authContext } from '../../store/AuthContext';

function ConfirmCode() {

    let location = useLocation()

    const navigate = useNavigate();
    const { loginStatus, setloginStatus } = useContext(authContext);
    const [confirmCode, setconfirmCode] = useState('');

    const confirm = () => {

        api.add('/webusers/confirmCode', { confirmCode: confirmCode, webUserId: location.state.webUserId })
            .then(res => {

                localStorage.setItem('token', res.token);
                setloginStatus(true);
            })
            .catch(err => {
                alert('Confirm Code Error!!');
            })

    }


    return (<>
        <Container component="main" maxWidth="xs" style={{ margin: "120px auto" }}>
            <Box
                sx={{
                    boxShadow: '0px 0px 30px 0px darkblue',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    gap: "10px",
                    width: "100%",
                    height: "60vh",
                    padding: '0 36px',
                    borderRadius: "15px"
                }}
            >
                <Typography component="h1" variant="h5" textAlign={"center"} fontWeight={"bold"} color="primary">
                    Confirmation
                </Typography>
                <TextField
                    autoFocus
                    margin="normal"
                    autoComplete='password'
                    label="Confirm code"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setconfirmCode(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, p: 2 }}
                    onClick={confirm}
                >Submit</Button>
            </Box>

        </Container>
    </>)
}

export default ConfirmCode
