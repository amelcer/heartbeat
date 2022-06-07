import { useMemo, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { FormProvider, useForm } from 'react-hook-form'
import styled from 'styled-components'
import NavigationButtons from 'src/components/ScheduleForm/NavigationButtons'
import ScheduleStepper from 'src/components/Stepper/ScheduleStepper'
import { Step } from 'src/components/Stepper/types'
import i18n from 'src/library/localization/i18n'
import AddMedicine from 'src/components/ScheduleForm/AddMedicine'
import Schedule from 'src/components/ScheduleForm/Schedule'
import KeyboardAvoidViewContainer from 'src/components/KeyboardAvoidView/KeyboardAvoidViewContainer'
import { yupResolver } from '@hookform/resolvers/yup'
import { Snackbar } from 'react-native-paper'
import { AddScheduleForm } from './types'
import { addScheduleSchema } from './schema'

const SNACKBAR_VISIBILITY_TIME = 3000

const Container = styled(View)`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StyledScrollView = styled(ScrollView)`
    flex: 1;
`

export default function NewSchedule({ navigation }: any) {
    const [currentStep, setCurrentStep] = useState(0)
    const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null)
    const methods = useForm<AddScheduleForm>({
        mode: 'onChange',
        resolver: yupResolver(addScheduleSchema()),
    })

    const {
        formState: { isDirty, isValid },
    } = methods

    const STEPS = useMemo<Step[]>(
        () => [
            {
                component: <AddMedicine />,
                title: i18n.t('addSchedule.addMedicine'),
            },
            {
                component: <Schedule />,
                title: i18n.t('addSchedule.schedule'),
            },
        ],
        []
    )

    const handleNextStep = () => {
        if (isDirty && !isValid) {
            const errorMessage = i18n.t('errors.fillRequiredFields') // TODO reduce errors object to get message
            setSnackbarMessage(errorMessage)
            return
        }
        if (currentStep === STEPS.length - 1) return // TODO: submit form
        setCurrentStep(currentStep + 1)
    }

    const handleCancelClick = () => {
        navigation.navigate('Home')
    }

    const handleSnackbarDismiss = () => {
        setSnackbarMessage(null)
    }

    return (
        <FormProvider {...methods}>
            <Container>
                <ScheduleStepper currentStep={currentStep} steps={STEPS} />
                <KeyboardAvoidViewContainer>
                    <StyledScrollView>{STEPS[currentStep].component}</StyledScrollView>
                </KeyboardAvoidViewContainer>
                <NavigationButtons
                    onNextPress={handleNextStep}
                    onCancelPress={handleCancelClick}
                    lastStep={currentStep === STEPS.length - 1}
                />
                <Snackbar
                    visible={!!snackbarMessage}
                    onDismiss={handleSnackbarDismiss}
                    duration={SNACKBAR_VISIBILITY_TIME}
                >
                    {snackbarMessage}
                </Snackbar>
            </Container>
        </FormProvider>
    )
}
