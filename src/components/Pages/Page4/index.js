import Description from '../../Description'
import DoneImg from '../../../assets/done.PNG'
import Wrapper from '../../Wrapper/Wrapper'

const Page4 = ({Submit, userData}) => {
    return (
        <div>
            <img src={DoneImg} alt='NA' style={{ display: "flex", margin: "5rem auto 2rem" }} />
            <Description title={`Congratulations, ${userData.current.displayName}!`} summary="You have completed onboarding, you can start using the Eden!" />
            <Wrapper width="50%">
                <button style={{background: '#664DE5'}} onClick={Submit}>Launch Eden</button>
            </Wrapper>
        </div>
    )
}

export default Page4
