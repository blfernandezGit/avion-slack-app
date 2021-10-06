import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Logout from '../../Home/Logout'
import ChannelList from './Channels/ChannelList'
import CreateChannel from './Channels/CreateChannel'
import AddContact from './Contacts/AddContact'
import ContactList from './Contacts/ContactList'
import { ClientContext } from '../../../context/ClientContext'
import Collapse from '../../Assets/ComponentSVG/Collapse'
import homeIcon from '../../Assets/Images/home_icon.png'
import mail from '../../Assets/Images/mail.png'

const Menu = () => {
    const { showMenu } = useContext(ClientContext)

    const history = useHistory()

    const [ channelCollapse, setChannelCollapse] = useState(false)
    const [ contactCollapse, setContactCollapse] = useState(false)
    const [ showContactAdd, setShowContactAdd] = useState(false)
    const [ showChannelAdd, setShowChannelAdd] = useState(false)

    const handleHome = () => {
        history.replace('/client/home')
    }

    let classes = "fixed no-scrollbar bg-yellowishWhite h-header-negative w-screen lg:w-1/4 md:w-1/2 transform duration-500 ease-in-out z-30 overflow-auto overscroll-none shadow-lg"
    if(showMenu) {
        classes += " -translate-x-full"
    }

    return (
        <div className={classes}> 
            {/* Home */}
            <button onClick={() =>{handleHome()}} className="flex w-full transform hover:translate-x-2 duration-300 ease-in-out text-left text-white select-none items-center bg-pink bg-opacity-95 border-white hover:border-black -ml-2 mr-2 border-2 mt-2 rounded-r-md border-opacity-25 hover:border-opacity-25">
                <img src={homeIcon} alt="homeIcon" className="w-6 h-6 ml-5"/>
                <span className="ml-1 py-1">Home</span>
            </button>

            {/* Channels */}
            <button  onClick={() => {setChannelCollapse(!channelCollapse)}} className="flex w-full transform hover:translate-x-2 duration-300 ease-in-out text-left select-none text-white items-center bg-pink bg-opacity-95 border-white hover:border-black -ml-2 mr-2 border-2 rounded-r-md border-opacity-25 my-2 hover:border-opacity-25">
                <Collapse />
                <span className="ml-1 my-1">Channels</span>
            </button>
            <div className="px-10">
                {!channelCollapse &&    
                    <>
                        <button onClick={() => {setShowChannelAdd(!showChannelAdd)}} className ="text-sm text-pink text-opacity-50 hover:text-pink flex">
                            <img src={mail} alt="addChannel" className="w-5 h-5 mr-2"/>
                            <span>Add Channel</span>
                        </button>    
                        { showChannelAdd && <CreateChannel /> }             
                        <ChannelList />
                    </>
                }
            </div>

            {/* Contacts */}
            <button  onClick={() => {setContactCollapse(!contactCollapse)}} className="flex w-full transform hover:translate-x-2 mb-2 duration-300 ease-in-out text-left select-none text-white items-center bg-pink bg-opacity-95 border-white hover:border-black border-2 rounded-r-md -ml-2 mr-2 border-opacity-25 hover:border-opacity-25">
                <Collapse />
                <span className="ml-1 my-1">Contacts</span>
            </button>
            <div className="px-10">
                {!contactCollapse &&  
                    <>
                        <button onClick={() =>{setShowContactAdd(!showContactAdd)}} className ="text-sm text-pink text-opacity-50 hover:text-pink flex">
                            <img src={mail} alt="addContact" className="w-5 h-5 mr-2"/>
                            <span>Add Contact</span>
                        </button>   
                        { showContactAdd &&
                            <AddContact />
                        }    
                        <ContactList />
                    </>
                }
            </div>
            
            <Logout /> 
        </div>
    )
}

export default Menu
