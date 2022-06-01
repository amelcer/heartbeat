export interface Step {
    onPress: () => void
    title: string
}

export interface Stepper {
    steps: Step[]
    currentStep: number
}
