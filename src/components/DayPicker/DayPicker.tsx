import { useMemo } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import dayjs from 'src/library/dayjs'
import theme from 'src/library/theme/theme'
import styled from 'styled-components'

const Container = styled(View)`
    flex-direction: row;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
`

const Day = styled(View)<{ today?: boolean }>`
    padding: 10px;
    background-color: ${(props) => (props.today ? theme.colors.primary : 'transparent')};
    border-radius: 30px;
    align-items: center;
`

const DayName = styled(Text)<{ today?: boolean }>`
    color: ${(props) => (props.today ? '#fff' : '#000')};
`

const DayNumber = styled(View)`
    color: black;
    padding: 5px;
    border-radius: 100px;
    margin-top: 10px;
    background-color: white;
`

export default function DayPicker() {
    const weekStart = dayjs().startOf('week')
    const today = dayjs()
    const week = useMemo(() => Array.from({ length: 7 }).map((_, i) => weekStart.add(i, 'day')), [weekStart])

    return (
        <Container>
            {week.map((day) => {
                const isToday = day.isSame(today, 'date')
                return (
                    <Day key={day.toISOString()} today={isToday}>
                        <DayName today={isToday}>{day.format('dd')}</DayName>
                        <DayNumber>
                            <Text>{day.get('date')}</Text>
                        </DayNumber>
                    </Day>
                )
            })}
        </Container>
    )
}
