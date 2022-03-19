import { useState } from 'react'

export const StepperLogic = (rememberSubmittedStep) => {
    const [currentStep, setCurrentStep] = useState(0);

    const Submit = (index) => {
        if (rememberSubmittedStep.current==='submitted') {
            return
        }
        if (index !== undefined) {
            setCurrentStep(index);
            return;
        }
        setCurrentStep(currentStep + 1);
        rememberSubmittedStep.current = rememberSubmittedStep.current+1
    }
    return { Submit,currentStep }
}
