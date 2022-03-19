import { useState } from 'react'

export const Page3Logic = ({userData, Submit}) => {
    const [cardSelected, setCardSelected] = useState(!userData.current.forGroup ? "single":"group");

    const changeCard = (value) => {
        setCardSelected(value);
    }

    const SubmitLogic = () => {
        userData.current.forGroup = cardSelected==="single" ? false : true
        Submit()
    }

    return { cardSelected, changeCard, SubmitLogic }
}
