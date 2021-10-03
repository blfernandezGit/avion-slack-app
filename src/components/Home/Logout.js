import { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext'
import Sakura from '../Assets/ComponentSVG/Sakura'

const Logout = () => {
    const { setLoginDetails, handleLoading } = useContext(ClientContext)

    const handleLogout = () => {
        handleLoading(true)
        setTimeout(() =>{
            handleLoading(false)
            setLoginDetails()
        }, 3000)
        
    }
    // Button for Logout
    // TODO: might need to rethink component - maybe just use Button Component - can be custom or from framework
    return (
        <div className="flex ml-2 align-middle mt-2">
            <Sakura/>
            <button onClick={handleLogout} className="text-pink font-bold">Sign Out</button>
        </div>
    )
}

export default Logout
