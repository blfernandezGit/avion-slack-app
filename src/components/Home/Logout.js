import { useHistory } from "react-router-dom"
import { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext'

const Logout = () => {
    const { setLoginDetails, loginPath } = useContext(ClientContext)

    // get current url path
    const history = useHistory()

    const handleLogout = () => {
        setLoginDetails()
        history.replace(loginPath) 
    }
    // Button for Logout
    // TODO: might need to rethink component - maybe just use Button Component - can be custom or from framework
    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default Logout
