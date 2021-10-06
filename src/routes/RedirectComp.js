import { Redirect } from 'react-router-dom';
import { useContext } from 'react'
import { ClientContext } from '../context/ClientContext';


// Currently redirects refreshes to /client TODO: Remove or modify
const RedirectComp = () => {
    const { isAuth } = useContext(ClientContext)
    return (
        <>
        {isAuth &&
            <>
                <Redirect from="/" to="/client/home" />
                <Redirect from="/signup" to="/client/home" />
            </>
        }
        </>
    )
}

export default RedirectComp
