import Stepper from '../Stepper'
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import Page3 from '../Pages/Page3'
import Page4 from '../Pages/Page4'
import {useViewLogic} from './useViewLogic'


const View = () => {
    const {onDone, userData, rememberSubmittedStep} = useViewLogic();
    const pagesArr = [Page1, Page2, Page3, Page4];

    return (
        <>
            <Stepper Done={onDone} rememberSubmittedStep={rememberSubmittedStep}>
                {pagesArr.map((Page, index) => <Page key={index} userData={userData}/>)}
            </Stepper>
        </>
    )
}

export default View;
