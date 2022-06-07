import { Info } from 'luxon'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import DayPicker from 'src/components/DayPicker/DayPicker'
import i18n from 'src/library/localization/i18n'
import theme from 'src/library/theme/theme'
import { AddScheduleForm } from 'src/screens/AddSchedule/types'
import styled from 'styled-components'
import { PrimaryText, ScheduleTypeText } from './ScheduleText'

const Container = styled(View)`
    margin-top: 20px;
    align-items: center;
`

const EveryText = styled(Text)`
    font-family: ${theme.fonts.regular.fontFamily};
    font-size: 16px;
`

export default function DailySchedule() {
    const { control } = useFormContext<AddScheduleForm>()
    const { fields, append, remove } = useFieldArray({ control, name: 'days' })

    const handleDayClick = (selected: number) => () => {
        const index = fields.findIndex((day) => day.value === selected)
        if (index >= 0) {
            remove(index)
            return
        }

        append({ value: selected })
    }

    return (
        <Container>
            <DayPicker selectedDays={fields.map((d) => d.value)} onDayClick={handleDayClick} />
            <ScheduleTypeText>{i18n.t('addSchedule.scheduleOccurrence')}</ScheduleTypeText>
            <EveryText>
                Every:{' '}
                {fields.map((d) => (
                    <PrimaryText key={d.id}>{Info.weekdays('long')[d.value]}, </PrimaryText>
                ))}
            </EveryText>
        </Container>
    )
}
