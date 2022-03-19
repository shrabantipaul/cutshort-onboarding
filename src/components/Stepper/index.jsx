import React from 'react'
import ProgressBar from '../ProgressBar'
import { StepperLogic } from "./stepperLogic";


const Stepper = ({ children, Done, rememberSubmittedStep }) => {
    const {Submit, currentStep} = StepperLogic(rememberSubmittedStep)
    return (
        <div>
            <ProgressBar count={children.length} currentStep={currentStep} Submit={Submit} progressStep={rememberSubmittedStep.current} />
            {
                React.cloneElement(children[currentStep], { 
                    Submit: currentStep === children.length - 1 ? Done : Submit,
                    currentStep,
                })
            }
        </div>
    )
}

export default Stepper



