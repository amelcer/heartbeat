interface TakingHour {
    time: string
    label: string
    amount: number
    taken: boolean
}

export interface Medicine {
    name: string
    takingHour: TakingHour[]
    description?: string
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
