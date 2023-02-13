import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../network/api'
import { authContext } from '../../store/AuthContext';

function ConfirmCode() {

    const navigate = useNavigate();
    const { loginStatus, setloginStatus } = useContext(authContext);
    const [confirmCode, setconfirmCode] = useState('');

    const confirm = () => {

        api.add('/webusers/confirmCode', {})
            .then(res => {
                localStorage.setItem('token', res.token);
                setloginStatus(true);
                navigate('group')
            })

    }


    return (<>
        <input type='text' onChange={(e) => setconfirmCode(e.target.value)} />
        <button onClick={confirm}>Confirm</button>
    </>)
}

export default ConfirmCode