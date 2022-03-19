import Input from '../../Input'
import Description from '../../Description'
import Wrapper from '../../Wrapper/Wrapper';
import {Page1Logic} from './Page1Logic';

const Page1 = ({ Submit, userData }) => {

    const { name, displayName, onChange, SubmitLogic } = Page1Logic(userData, Submit);
    
    return (
        <>
            <Description title="Welcome! First things first..." summary="You can always change them later" />
            <Wrapper width='60%'>
                <form onSubmit={SubmitLogic}>
                    <Input label="Full Name" placeholder="Steve Jobs" name="name"
                        value={userData?.current?.name}
                        onInputChange={(val) => onChange(val, 'name')} />
                    <Input label="Display Name" placeholder="Steve" name="displayName"
                        value={userData?.current?.displayName}
                        onInputChange={(val) => onChange(val)} />
                    <button type='submit'
                        disabled={!name?.length || !displayName?.length}
                        className={(!name?.length || !displayName?.length) ? 'disabledButton' : ''}
                    >Create workspace</button>
                </form>
            </Wrapper>
        </>
    )
}

export default Page1
