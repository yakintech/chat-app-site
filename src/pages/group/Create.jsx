import { Button,TextField,FormGroup, FormLabel, Box, Typography, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'react-select';
import { api } from '../../network/api';
import { userFormValidationSchema } from './userFormValidationSchema'
import { useNavigate } from 'react-router-dom';
import { toast} from 'react-toastify';



function Create() {

    let navigate = useNavigate()

    const [selectSource, setselectSource] = useState([])

    useEffect(() => {

        api.getAll('/webusers')
            .then(res => {

                let data = [];
                res.forEach(element => {
                    data.push({
                        label: element.email,
                        value: element._id
                    })
                });
                setselectSource(data);

            })
    }, [])




    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(userFormValidationSchema),
        defaultValues: {
            name: '',
            members: []
        }
    });

    const add = (formData) => {
        let requestData = {
            name: formData.name,
            users: []
        };

        formData.members.forEach(item => {
            requestData.users.push(item.value)
        });

        api.add('/groups', requestData)
            .then(res => {
                console.log('Response ', res);
                navigate("../group")
                toast.success("Group is created")
            })
            .catch(err => {
                if (err.response.status === 422) {
                    alert('Such a group name is available in the records! Please find a new name')
                }
                else {
                    alert('An error occurred in the system!')
                }
            })

    }


    return (<>

        <Box flexDirection="column" display="flex" alignItems="center">
            <Typography marginBottom="20px" color="primaery.main" align="center" variant="h5">Create Group</Typography>
            <form onSubmit={handleSubmit(add)}>
                <FormGroup sx={{ padding: 2, borderRadius: 2, border: '1px solid', width: "800px" }}>
                    <Box display="flex" alignItems="center" flexDirection="column">
                        <Box position="relative" width="100%" >
                            <Box marginBottom="40px" display="flex" alignItems="center" flexDirection="row" justifyContent="space-between">
                                <FormLabel>Group Name</FormLabel>
                                <Controller name='name' control={control} render={({ field }) =>
                                    <TextField inputProps={{ style: { padding: '16px' } }} sx={{ width: "500px" }} id="outlined-basic" placeholder='Write Group Name' variant="outlined" {...field} />}
                                />
                            </Box>
                            <Typography right="0" position="absolute" bottom="5px" color="error" align="center">{errors.name?.message}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center" flexDirection="column">
                        <Box position="relative" width="100%" >
                            <Box marginBottom="40px" display="flex" alignItems="center" flexDirection="row" justifyContent="space-between">
                                <FormLabel>Select members</FormLabel>
                                <Controller
                                    name='members'
                                    control={control}
                                    render={({ field }) => <Select
                                        {...field}
                                        isMulti
                                        name='members'
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        options={selectSource}
                                        styles={{ control: (provided) => ({ ...provided, width: '500px', padding: '11px' }) }}
                                    ></Select>}
                                />
                            </Box>
                            <Typography right="0" position="absolute" bottom="5px" color="error" align="center">{errors.members?.message}</Typography>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button style={{ padding: '10px 30px', color: "#1F1F1F", borderColor: "#1F1F1F" }} type="submit" variant="outlined">Create</Button>
                    </Box>
                </FormGroup>
            </form>

        </Box>
    </>
    )
}

export default Create