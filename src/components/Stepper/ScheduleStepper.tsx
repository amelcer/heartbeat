import { View } from 'react-native'
import { Text } from 'react-native-paper'
import i18n from 'src/library/localization/i18n'
import theme from 'src/library/theme/theme'
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

interface Props {
    currentStep: number
    steps: Step[]
}

export default function ScheduleStepper({ currentStep, steps }: Props) {
    return (
        <Container>
            <Title>{i18n.t('addSchedule.createNewSchedule')}</Title>
            <StepperDots currentStep={currentStep} steps={steps} />
        </Container>
    )
}
