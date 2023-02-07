import { Button, Input, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'react-select';
import { api } from '../../network/api';



const userFormSchema = yup.object({
    name: yup.string().required('Group Name is requried'),
    // lastname: yup.string().required('Last name is required')
})


function Create() {

    const [selectSource, setselectSource] = useState([])

    useEffect(() => {

        api.getAll('/webusers')
            .then(res => {
                let data = []
                res.forEach(element => {
                    data.push({
                        label:element.email,
                        value:element._id
                    })
                });

                setselectSource(data);


            })

    }, [])




    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(userFormSchema),
        defaultValues: {
            name: ''
        }
    });

    const add = (data) => {
        console.log('Data ', data);
    }

    return (<>
        <div>
            <form onSubmit={handleSubmit(add)}>
                <div>
                    <label>First Name</label>
                    <Controller
                        name='name'
                        control={control}
                        render={({ field }) => <TextField {...field} />}
                    />
                </div>
                <p style={{ color: 'red' }}>{errors.name?.message}</p>
                <div>
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
                        ></Select>}
                    />

                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>

            {/* <form onSubmit={handleSubmit(add)}>
                <div>
                    <label>First Name</label>
                    <input type="text" {...register('firstname')} />
                    <p style={{color:'red'}}>{errors.firstname?.message}</p>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" {...register('lastname')} />
                    <p style={{color:'red'}}>{errors.lastname?.message}</p>

                </div>
                <button type='submit'>Submit</button>
            </form> */}
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button onClick={add}>Add</Button> */}
        </div>
    </>
    )
}

export default Create