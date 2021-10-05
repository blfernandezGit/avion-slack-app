import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { v4 as uuid_v4 } from "uuid"
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

    const [recallChannels, setRecallChannels] = useState(null)

    // function that changes recallChannels state every call such that it can be added as a useEffect dependency in useAxiosGet call by ChannelList
    // basically a function to re-render Channel List whenever a new Channel is created locally
    // TODO: improve if possible - since currently just setting a state to a unique id - uuid_v4() so that API request is called every time the function is called
    const handleRecallChannels = () => {
        setRecallChannels(uuid_v4())
    }

    const handleHome = () => {
        history.replace('/client/home')
    }

    let classes = "fixed no-scrollbar bg-yellowishWhite h-header-negative w-screen lg:w-1/4 md:w-1/2 transform duration-500 ease-in-out z-30 overflow-auto overscroll-none shadow-lg"
    if(showMenu) {
        classes += " -translate-x-full"
    }

    //TODO: add link to a default page /client to remove     view from messages
        return (
            <div className={classes}> 
                {/* Add home component */}
                    <button onClick={() =>{handleHome()}} className="flex w-full transform hover:translate-x-2 duration-300 ease-in-out text-left text-white select-none items-center bg-pink bg-opacity-95 border-white hover:border-black -ml-2 mr-2 border-2 mt-2 rounded-r-md border-opacity-25 hover:border-opacity-25">
                        <img src={homeIcon} alt="homeIcon" className="w-6 h-6 ml-5"/>
                        <span className="ml-1 py-1">Home</span>
                    </button>
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
                                { showChannelAdd &&
                                    <CreateChannel 
                                        handleRecallChannels={handleRecallChannels} 
                                    />
                                }             
                                <ChannelList 
                                    recallChannels={recallChannels} 
                                />
                            </>
                        }
                    </div>
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
