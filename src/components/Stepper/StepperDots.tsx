import { View } from 'react-native'
import { Text } from 'react-native-paper'
import theme from 'src/library/theme/theme'
import styled from 'styled-components'
import { Stepper } from './types'

const DOT_SIZE = 18
const CONNECTOR_WIDTH = DOT_SIZE + 15

const DotsContainer = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Dot = styled(View)<{ viewed: boolean }>`
    width: ${DOT_SIZE}px;
    height: ${DOT_SIZE}px;
    border-radius: ${DOT_SIZE}px;
    background-color: ${(props) => (props.viewed ? theme.colors.primary : '#DBDBDB')};
`

const DotConnector = styled(View)<{ viewed: boolean }>`
    width: ${CONNECTOR_WIDTH}px;
    margin-left: 5px;
    margin-right: 5px;
    height: 2px;
    background-color: ${(props) => (props.viewed ? theme.colors.primary : '#DBDBDB')};
`

const Title = styled(Text)`
    color: ${theme.colors.textGray};
    font-family: ${theme.fonts.light.fontFamily};
    font-size: 14px;
    text-align: center;
    margin-top: 5px;
`

export default function StepperDots({ steps, currentStep }: Stepper) {
    return (
        <View>
            <DotsContainer>
                {steps.map((s, i) => (
                    <DotsContainer key={s.title}>
                        <Dot viewed={i <= currentStep} />
                        {i < steps.length - 1 && <DotConnector viewed={i + 1 <= currentStep} />}
                    </DotsContainer>
                ))}
            </DotsContainer>
            <Title>{steps[currentStep].title}</Title>
        </View>
    )
}
