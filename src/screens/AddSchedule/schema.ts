import * as yup from 'yup'

export const addScheduleSchema = () =>
    yup.object().shape({
        medicine: yup.object().shape({
            name: yup.string().required(),
            description: yup.string(),
        }),
    })
