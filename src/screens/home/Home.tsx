import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import DayPicker from 'src/components/DayPicker/DayPicker'
import { useAuth } from 'src/library/hooks/useAuth'
import i18n from 'src/library/localization/i18n'

export default function Home() {
    const { user } = useAuth()
    const name = user?.email?.split('@')[0] || ''
    return (
        <View>
            <Text>
                {i18n.t('home.hello')} {name}
            </Text>
            <DayPicker />
        </View>
    )
}
