import { ParamListBase, StackNavigationState, TypedNavigator } from '@react-navigation/native'
import { NativeStackNavigationEventMap, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { AuthStackParamList } from './screens/auth/types'
import Home from './screens/home/Home'
import { UserStackParamList } from './types'

interface Props {
    Stack: TypedNavigator<
        AuthStackParamList & UserStackParamList,
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

export default function UserStack({ Stack }: Props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}
