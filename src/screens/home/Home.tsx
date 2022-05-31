import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { useQuery } from 'react-query'
import WeekView from 'src/components/WeekView/WeekView'
import { useAuth } from 'src/library/hooks/useAuth'
import i18n from 'src/library/localization/i18n'
import theme from 'src/library/theme/theme'
import styled from 'styled-components'
import getUserSchedules from './api'
import EmptyScreen from './EmptyScreen'
import HomePlaceholder from './HomePlaceholder'

const Container = styled(View)`
    padding-top: 10px;
    flex: 1;
    padding-bottom: 20px;
`

const Title = styled(Text)`
    font-family: ${theme.fonts.regular.fontFamily};
    font-size: 20px;
`

const SubTitle = styled(Text)`
    font-family: ${theme.fonts.light.fontFamily};
    font-size: 16px;
    text-align: center;
    margin-bottom: 20px;
`

const SubTitleCaption = styled(SubTitle)`
    color: ${theme.colors.primary};
`

export default function Home() {
    const { data, isLoading, isError } = useQuery('schedules', getUserSchedules)
    const { user } = useAuth()
    const name = user?.email?.split('@')[0] || ''

    return (
        <Container>
            <Title>
                {i18n.t('home.hello')}, {name}
            </Title>
            <WeekView />
            <SubTitle>
                {i18n.t('home.yourMedicine')} <SubTitleCaption>{i18n.t('home.today')}:</SubTitleCaption>
            </SubTitle>
            {isLoading && <HomePlaceholder />}
            {isError && <Text>Error</Text>}
            {data && data?.length > 0 ? <Text>Medicines</Text> : <EmptyScreen />}
        </Container>
    )
}
