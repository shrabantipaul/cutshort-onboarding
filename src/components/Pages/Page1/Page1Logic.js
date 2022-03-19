import { useState } from 'react'

export const Page1Logic = (userData, Submit) => {
    const [name, setName] = useState(userData.current.name)
    const [displayName, setDisplayName] = useState(userData.current.displayName)

    const onChange = (val, variableToChange) => {
        variableToChange ? setName(val) : setDisplayName(val)
    }

    const SubmitLogic = (e) => {
        e.preventDefault();
        userData.current.name = e.currentTarget.name.value;
        userData.current.displayName = e.currentTarget.displayName.value;
        Submit();
    }
    return { name, displayName, onChange, SubmitLogic }
}
