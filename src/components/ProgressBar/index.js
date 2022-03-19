import {useEffect} from 'react'
import Circle from '../Circle'
const ProgressBar = ({ count, currentStep, Submit, progressStep }) => {

    useEffect(() => {
      document.getElementById('bar').style.width = `${(100/(count))*(currentStep+1)}%` //calculate the highlighted width of the progress bar
    }, [currentStep,count]);
    
    return (
        <div id="progressbar">
            {Array.from(Array(count).keys()).map((i)=><Circle key={i} displayCount={i+1} active={currentStep>=i} progressStep={progressStep}
            Submit={()=>{
                Submit(i)
            }}/>)}
            <div className='progress'>
                <div id='bar'></div>
            </div>
        </div>
    )
}

export default ProgressBar

