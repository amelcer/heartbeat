import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import i18n from 'src/library/localization/i18n'
import theme from 'src/library/theme/theme'
import styled from 'styled-components'

export interface NavigationButtonsProps {
    onNextPress: () => void
    onCancelPress: () => void
    lastStep?: boolean
}

const Container = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 15px;
`

const ButtonText = styled(Text)`
    color: #fff;
    font-family: ${theme.fonts.regular.fontFamily};
`

export default function NavigationButtons({ onNextPress, onCancelPress, lastStep }: NavigationButtonsProps) {
    return (
        <Container>
            <Button onPress={onCancelPress} mode="text">
                {i18n.t('common.cancel')}
            </Button>
            {lastStep ? (
                <Button mode="contained" onPress={onNextPress} labelStyle={{ color: '#fff' }}>
                    <ButtonText>{i18n.t('common.finish')}</ButtonText>
                </Button>
            ) : (
                <Button
                    mode="contained"
                    icon="arrow-right"
                    contentStyle={{ flexDirection: 'row-reverse' }}
                    labelStyle={{ color: '#fff' }}
                    onPress={onNextPress}
                >
                    <ButtonText>{i18n.t('common.next')}</ButtonText>
                </Button>
            )}
        </Container>
    )
}
