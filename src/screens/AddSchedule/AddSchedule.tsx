import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FormProvider, useForm } from 'react-hook-form'
import ScheduleStepper from 'src/components/Stepper/ScheduleStepper'
import { navigationTheme } from 'src/library/theme/navigationTheme'
import AddMedicine from './AddMedicine'
import Schedule from './Schedule'
import { ScheduleStackParamList } from './types'

const Stack = createNativeStackNavigator<ScheduleStackParamList>()

export default function AddSchedule() {
    const methods = useForm()

    return (
        <FormProvider {...methods}>
            <NavigationContainer independent theme={navigationTheme}>
                <Stack.Navigator
                    screenOptions={{
                        header: ScheduleStepper,
                    }}
                >
                    <Stack.Screen name="AddMedicine" component={AddMedicine} initialParams={{ dotIndex: 0 }} />
                    <Stack.Screen name="Schedule" component={Schedule} initialParams={{ dotIndex: 1 }} />
                </Stack.Navigator>
            </NavigationContainer>
        </FormProvider>
    )
}
