import { View } from 'react-native'
import { Text } from 'react-native-paper'
import theme from 'src/library/theme/theme'
import styled from 'styled-components'

const Container = styled(View)`
    margin-top: 20px;
`

const EveryText = styled(Text)`
    font-family: ${theme.fonts.regular.fontFamily};
    font-size: 16px;
`

export default function PeriodicSchedule() {
    return (
        <Container>
            <Text>pick day</Text>
            <EveryText>Every</EveryText>
        </Container>
    )
}
