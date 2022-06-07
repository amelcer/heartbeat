import { Dimensions, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import theme from 'src/library/theme/theme'
import styled from 'styled-components'
import { Info } from 'luxon'

interface Props {
    selectedDays: number[]
    onDayClick: (selected: number) => () => void
}

const SCREEN_WIDTH = Dimensions.get('window').width
const BUTTON_WIDTH = Math.floor(SCREEN_WIDTH / 8)

const Container = styled(View)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`

const ButtonContainer = styled(View)`
    width: ${BUTTON_WIDTH}px;
`

const DayButton = styled(Button)<{ selected: boolean }>`
    background-color: ${(props) => (props.selected ? theme.colors.primary : '#EEEEEE')};
`

const ButtonText = styled(Text)<{ selected: boolean }>`
    color: ${(props) => (props.selected ? '#fff' : '#000')};
    text-transform: none;
    font-family: ${theme.fonts.light.fontFamily};
    font-size: 12px;
`

export default function DayPicker({ selectedDays, onDayClick }: Props) {
    return (
        <Container>
            {Array.from({ length: 7 }).map((_, i) => {
                const selected = selectedDays.findIndex((dayNumber) => dayNumber === i) >= 0
                return (
                    <ButtonContainer key={Info.weekdays('short')[i]}>
                        <DayButton selected={selected} onPress={onDayClick(i)}>
                            <ButtonText selected={selected}>{Info.weekdays('short')[i]}</ButtonText>
                        </DayButton>
                    </ButtonContainer>
                )
            })}
        </Container>
    )
}
