import { useState } from 'react'

export const Page2Logic = (userData, Submit) => {
    const [workspace, setWorkSpace] = useState(userData.current.workspace)
    const [workspaceURL, setWorkSpaceURL] = useState(userData.current.workspaceURL)

    const onChange = (val, variableToChange) => {
        variableToChange ? setWorkSpace(val) : setWorkSpaceURL(val)
    }

    const validURL = (str) => {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }

    const SubmitLogic = (e) => {
        e.preventDefault();
        userData.current.workspace = e.currentTarget.workspace.value;
        userData.current.workspaceURL = e.currentTarget.workspaceURL.value;
        Submit();
    }
    return { workspace, workspaceURL, onChange, SubmitLogic, validURL }
}
