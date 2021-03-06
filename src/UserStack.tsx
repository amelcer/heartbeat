import { ParamListBase, StackNavigationState, TypedNavigator } from '@react-navigation/native'
import { NativeStackNavigationEventMap, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import NewSchedule from 'src/screens/AddSchedule/NewSchedule'
import UserHeader from './components/UserHeader/UserHeader'
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
        <>
            <UserHeader />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="NewSchedule" component={NewSchedule} />
            </Stack.Navigator>
        </>
    )
}
