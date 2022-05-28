import { ParamListBase, StackNavigationState, TypedNavigator } from '@react-navigation/native'
import { NativeStackNavigationEventMap, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text } from 'react-native-paper'
import SignIn from './signIn/SignIn'
import Register from './register/Register'
import FirstLaunch from '../firstLaunch/FirstLaunch'

interface Props {
    Stack: TypedNavigator<
        ParamListBase,
        StackNavigationState<ParamListBase>,
        NativeStackNavigationOptions,
        NativeStackNavigationEventMap,
        ({
            id,
            initialRouteName,
            children,
            screenListeners,
            screenOptions,
            ...rest
        }: NativeStackNavigatorProps) => JSX.Element
    >
}

export default function AuthStack({ Stack }: Props) {
    const [isLoading, setIsLoading] = useState(true)
    const [firstTimeOpen, setFirsTimeOpen] = useState(true)

    useEffect(() => {
        AsyncStorage.getItem('firstLaunch')
            .then((launched) => {
                if (launched === 'true') {
                    setFirsTimeOpen(false)
                }
            })
            // eslint-disable-next-line no-console
            .catch((e) => console.warn(e))
            .finally(() => {
                setIsLoading(false)
                AsyncStorage.setItem('firstLaunch', 'true')
            })
    }, [])

    if (isLoading) return <ActivityIndicator animating />

    return (
        <>
            <Text>Hello</Text>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {firstTimeOpen && <Stack.Screen name="firstLaunch" component={FirstLaunch} />}
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </>
    )
}
