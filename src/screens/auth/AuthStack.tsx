import { ParamListBase, StackNavigationState, TypedNavigator } from '@react-navigation/native'
import { NativeStackNavigationEventMap, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import React from 'react'
import { Text } from 'react-native-paper'
import SignIn from './signIn/SignIn'
import Register from './register/Register'

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
    return (
        <>
            <Text>Hello</Text>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </>
    )
}
