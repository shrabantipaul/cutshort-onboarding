import Input from '../../Input'
import Description from '../../Description'
import Wrapper from '../../Wrapper/Wrapper';
import { Page2Logic } from './Page2Logic';

const Page2 = ({ Submit, userData }) => {

    const { workspace, workspaceURL, onChange, SubmitLogic, validURL } = Page2Logic(userData, Submit);

    return (
        <>
            <Description title="Let's set up a home for all your work" summary="You can always create another workspace later" />
            <Wrapper width="60%">
                <form onSubmit={SubmitLogic}>
                    <Input label="Workspace Name" placeholder="Eden" name="workspace"
                        value={userData?.current?.workspace}
                        onInputChange={(val) => onChange(val, 'workspace')} />

                    <div className='input-wrap'>
                        <label>Workspace URL <span>(optional)</span></label>
                        <div className='workSpaceURLWrap'>
                            <input disabled className="text-input workspaceURLdisabled" placeholder="www.eden.com/" />
                            <input className="text-input workspaceURL" type="text" placeholder="Example" name="workspaceURL"
                                defaultValue={userData?.current?.workspaceURL}
                                onChange={(e) => onChange(e.target.value)} />
                        </div>
                        <p className={workspaceURL.length > 0 ? (validURL(workspaceURL)) ? 'hideError-message' : 'error-message' : 'hideError-message'}>
                            Please enter a valid URL
                        </p>
                    </div>
                    <button type='submit'
                        disabled={!workspace?.length || !workspaceURL?.length || !validURL(workspaceURL)}
                        className={(!workspace?.length || !workspaceURL?.length || !validURL(workspaceURL)) ? 'disabledButton' : ''} > Create workspace</button>
                </form>
            </Wrapper>
        </>
    )
}

export default Page2
