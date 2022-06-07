import { Medicine } from 'src/library/db/schedule/schema'

export interface AddScheduleForm {
    medicine: Medicine
    days: number[]
}
