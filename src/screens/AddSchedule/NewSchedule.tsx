import { useMemo, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ScrollView, View } from 'react-native'
import NavigationButtons from 'src/components/ScheduleForm/NavigationButtons'
import ScheduleStepper from 'src/components/Stepper/ScheduleStepper'
import { Step } from 'src/components/Stepper/types'
import i18n from 'src/library/localization/i18n'
import styled from 'styled-components'
import AddMedicine from './AddMedicine'
import Schedule from './Schedule'

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
    const methods = useForm()

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
        if (currentStep === STEPS.length - 1) return // TODO: submit form
        setCurrentStep(currentStep + 1)
    }

    const handleCancelClick = () => {
        navigation.navigate('Home')
    }

    return (
        <FormProvider {...methods}>
            <Container>
                <ScheduleStepper currentStep={currentStep} steps={STEPS} />
                <StyledScrollView>{STEPS[currentStep].component}</StyledScrollView>
                <NavigationButtons
                    onNextPress={handleNextStep}
                    onCancelPress={handleCancelClick}
                    lastStep={currentStep === STEPS.length - 1}
                />
            </Container>
        </FormProvider>
    )
}
