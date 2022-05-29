import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { useAuth } from './library/hooks/useAuth'
import AuthStack from './screens/auth/AuthStack'
import UserStack from './UserStack'
import theme from './library/theme/theme'
import { AuthStackParamList } from './screens/auth/types'
import { UserStackParamList } from './types'

const navigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff',
    },
}

const Stack = createNativeStackNavigator<AuthStackParamList & UserStackParamList>()

export default function Root() {
    const { user } = useAuth()

    return (
        <NavigationContainer theme={navigationTheme}>
            <PaperProvider theme={theme}>
                {user ? <UserStack Stack={Stack} /> : <AuthStack Stack={Stack} />}
            </PaperProvider>
        </NavigationContainer>
    )
}
