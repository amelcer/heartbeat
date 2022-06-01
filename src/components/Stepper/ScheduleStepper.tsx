import { RouteProp } from '@react-navigation/native'
import { useMemo } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import i18n from 'src/library/localization/i18n'
import theme from 'src/library/theme/theme'
import { ScheduleStackParamList } from 'src/screens/AddSchedule/types'
import styled from 'styled-components'
import StepperDots from './StepperDots'
import { Step } from './types'

const Container = styled(View)`
    padding-top: 15px;
    padding-bottom: 25px;
    justify-content: center;
`

const Title = styled(Text)`
    text-align: center;
    font-family: ${theme.fonts.medium.fontFamily};
    font-size: 18px;
    margin-bottom: 20px;
`

type ProfileScreenRouteProp = RouteProp<ScheduleStackParamList, keyof ScheduleStackParamList>

type Props = {
    route: ProfileScreenRouteProp
}

export default function ScheduleStepper({ route }: Props) {
    const STEPS = useMemo<Step[]>(
        () => [
            {
                onPress: () => {},
                title: i18n.t('addSchedule.addMedicine'),
            },
            {
                onPress: () => {},
                title: i18n.t('addSchedule.schedule'),
            },
            {
                onPress: () => {},
                title: i18n.t('addSchedule.summary'),
            },
        ],
        []
    )

    return (
        <Container>
            <Title>{i18n.t('addSchedule.createNewSchedule')}</Title>
            <StepperDots currentStep={route.params?.dotIndex || 0} steps={STEPS} />
        </Container>
    )
}
