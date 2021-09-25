import { Redirect } from 'react-router-dom';
import { useContext } from 'react'
import { ClientContext } from '../context/ClientContext';

const RedirectComp = () => {
    //TODO: fix this
    const { isAuth } = useContext(ClientContext)
    return (
        <>
        {isAuth &&
            <>
                <Redirect from="/" to="/client" />
                <Redirect from="/signup" to="/client" />
            </>
        }
        </>
    )
}

export default RedirectComp
