export interface Step {
    title: string
    component: JSX.Element
    onPress?: () => void
}

export interface Stepper {
    steps: Step[]
    currentStep: number
}
