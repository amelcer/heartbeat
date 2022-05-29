import * as yup from 'yup'

export const registerSchema = () =>
    yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required().min(6, 'Password must be at least 5 characters'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must match'),
    })
