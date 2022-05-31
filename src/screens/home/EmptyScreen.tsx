import { Image, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import i18n from 'src/library/localization/i18n'
import theme from 'src/library/theme/theme'
import styled from 'styled-components'

const Container = styled(View)`
    flex: 1;
    justify-content: space-between;
`

const Title = styled(Text)`
    text-align: center;
    font-family: ${theme.fonts.medium.fontFamily};
    font-size: 22px;
    width: 90%;
    margin: 0 auto;
`

const SubTitle = styled(Text)`
    text-align: center;
    width: 80%;
    margin: 0 auto;
    font-family: ${theme.fonts.thin.fontFamily};
    font-size: 16px;
    color: #c6c6c6;
`

const ButtonText = styled(Text)`
    color: white;
    text-transform: none;
    font-family: ${theme.fonts.medium.fontFamily};
    font-size: 16px;
`

export default function EmptyScreen() {
    return (
        <Container>
            <Image source={require('assets/empty-entry-screen.png')} />
            <Title>{i18n.t('home.emptyTitle')}</Title>
            <SubTitle>{i18n.t('home.emptySubtitle')}</SubTitle>
            <Button labelStyle={{ color: '#fff' }} mode="contained" icon="plus">
                <ButtonText>{i18n.t('home.addSchedule')}</ButtonText>
            </Button>
        </Container>
    )
}
