import { useRef, createRef } from "react";

const rememberSubmittedStep = createRef();
rememberSubmittedStep.current = 0

export const useViewLogic = () => {
    const userData = useRef({name: '', displayName: '', workspace: '', workspaceURL: '', forGroup: true}) 

    const onDone = () => {
        alert('Check your response in console')
        rememberSubmittedStep.current = "submitted"
        console.log('data: ', userData.current)
    }

    return {onDone, userData, rememberSubmittedStep}
}
