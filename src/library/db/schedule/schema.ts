interface TakingHour {
    time: string
    label: string
}

interface Medicine {
    name: string
    amount: number
    takingHour: TakingHour
}

interface BaseSchedule {
    id: string
    userId: string
    startDate: Date
    medicines: Medicine[]
}

export interface RepeatableSchedule extends BaseSchedule {
    repeat: number | null
}

export interface DailySchedule extends BaseSchedule {
    days: number[]
}

export type Schedule = RepeatableSchedule | DailySchedule
