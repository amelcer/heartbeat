import { createCollection } from 'src/library/db/helper'
import { Schedule } from './schema'

export const scheduleCollection = createCollection<Schedule>('schedules')
