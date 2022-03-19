import Description from '../../Description'
import Card from '../../Card'
import Wrapper from '../../Wrapper/Wrapper'
import { Page3Logic } from './Page3Logic'

const Page3 = (props) => {
    const { cardSelected, changeCard, SubmitLogic } = Page3Logic(props);
    return (
        <>
            <Description title="How are you planning to use Eden?" summary="We'll streamline your setup experience accordingly." />
            <Wrapper width="56%">
                <div className='cardWrapper'>
                    <Card heading="For myself" description="Write better. Think more clearly. Stay organised" name="single"
                        cardSelected={cardSelected} changeCard={changeCard}/>
                    <Card heading="With my team" description="Wikis, docs, tasks & projects, all in one place" name="group"
                        cardSelected={cardSelected} changeCard={changeCard}/>
                </div>
                <button onClick={SubmitLogic}>Create Workspace</button>
            </Wrapper>
        </>
    )
}

export default Page3
