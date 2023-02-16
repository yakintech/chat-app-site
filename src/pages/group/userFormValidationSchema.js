import * as yup from "yup";
export const userFormValidationSchema = yup.object({
    name: yup.string().required('Group Name is requried'),
    members: yup.array().min(1,'You must add at least 1 user')
})