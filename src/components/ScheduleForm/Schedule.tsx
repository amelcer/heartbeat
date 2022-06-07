import { useState } from 'react'
import { View } from 'react-native'
import { ToggleButton as PaperToggleButton } from 'react-native-paper'
import styled from 'styled-components'
import DailySchedule from './ScheduleTypes/DailySchedule'
import PeriodicSchedule from './ScheduleTypes/PeriodicSchedule'

const Container = styled(View)`
    align-items: center;
`

const ToggleButton = styled(PaperToggleButton)`
    width: 100px;
`

const ToggleRow = styled(PaperToggleButton.Row)`
    text-align: center;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
`

type ScheduleType = 'periodic' | 'daily'

export default function Schedule() {
    const [scheduleType, setScheduleType] = useState<ScheduleType>('daily')

    const handleTypeChange = (newType: string) => {
        if (newType === null) return
        setScheduleType(newType as ScheduleType)
    }

    return (
        <Container>
            <ToggleRow value={scheduleType} onValueChange={handleTypeChange}>
                <ToggleButton icon="refresh" value="periodic" />
                <ToggleButton icon="calendar-today" value="daily" />
            </ToggleRow>
            {scheduleType === 'daily' ? <DailySchedule /> : <PeriodicSchedule />}
        </Container>
    )
}
