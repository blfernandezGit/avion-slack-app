import { useState, useContext } from 'react'
import { v4 as uuid_v4 } from "uuid"
import Logout from '../Home/Logout'
import ChannelList from '../Channels/ChannelList/ChannelList'
import CreateChannel from '../Channels/CreateChannel'
import AddContact from '../Contacts/AddContact'
import ContactList from '../Contacts/ContactList/ContactList'
import { ClientContext } from '../../context/ClientContext'
import Collapse from '../Assets/Collapse'

const Menu = () => {
    const { showMenu } = useContext(ClientContext)

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

    let classes = "fixed bg-yellowishWhite h-header-negative w-screen lg:w-1/4 md:w-1/2 transform duration-500 ease-in-out z-30 overflow-auto"
    if(showMenu) {
        classes += " -translate-x-full"
    }

    //TODO: add link to a default page /client to remove     view from messages
        return (
            <div className={classes}>  {/* PADDING SA LAHAT PARA SA HEADER*/}
                {/* Add home component */}
                <div className="">
                    <button className="flex w-full transform hover:translate-x-2 duration-300 ease-in-out text-left text-white select-none items-center text-lg bg-pink bg-opacity-95 border-white hover:border-black -ml-2 mr-2 border-2 mt-2 rounded-r-md border-opacity-25 hover:border-opacity-25">
                        <div className="ml-10 py-1">Home</div> 
                    </button>
                    <button className="flex w-full transform hover:translate-x-2 duration-300 ease-in-out text-left select-none text-white items-center text-lg bg-pink bg-opacity-95 border-white hover:border-black -ml-2 mr-2 border-2 rounded-r-md border-opacity-25 my-2 hover:border-opacity-25" onClick={() => {setChannelCollapse(!channelCollapse)}}>
                        <Collapse />
                        <span className="my-1">Channels</span>
                    </button>
                    {!channelCollapse &&    
                        <>
                            <button onClick={() => {setShowChannelAdd(!showChannelAdd)}}>+</button>                 
                            <ChannelList 
                                recallChannels={recallChannels} 
                            />
                        </>
                    }
                    <button className="flex w-full transform hover:translate-x-2 mb-2 duration-300 ease-in-out text-left select-none text-white items-center text-lg bg-pink bg-opacity-95 border-white hover:border-black border-2 rounded-r-md -ml-2 mr-2 border-opacity-25 hover:border-opacity-25" onClick={() => {setContactCollapse(!contactCollapse)}}>
                        <Collapse />
                        <span className="my-1">Contacts</span>
                    </button>
                    {!contactCollapse &&  
                        <>
                            <button onClick={() =>{setShowContactAdd(!showContactAdd)}}>+</button>       
                            <ContactList />
                        </>
                    }

                    { showChannelAdd &&
                        <CreateChannel 
                            handleRecallChannels={handleRecallChannels} 
                        />
                    }
                    
                    { showContactAdd &&
                        <AddContact />
                    }
                    

                    <Logout /> 
                </div>
                </div>
        )
}

export default Menu
