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

    const [recallChannels, setRecallChannels] = useState(null)

    // function that changes recallChannels state every call such that it can be added as a useEffect dependency in useAxiosGet call by ChannelList
    // basically a function to re-render Channel List whenever a new Channel is created locally
    // TODO: improve if possible - since currently just setting a state to a unique id - uuid_v4() so that API request is called every time the function is called
    const handleRecallChannels = () => {
        setRecallChannels(uuid_v4())
    }

    //TODO: add link to a default page /client to remove     view from messages
    if(showMenu){
        return (
            <div className="flex bg-dirtyWhite md:w-1/4 max-h-screen min-h-screen max-w-screen text-white pt-12 flex-col overflow-auto">  {/* PADDING SA LAHAT PARA SA HEADER*/}
                {/* Add home component */}
                <div className="">
                    <button className="rounded-md flex w-full transform hover:translate-x-2 text-left select-none font-bold items-center order-4 bg-pink bg-opacity-25 border-black -ml-2 mr-2 border-b-2 border-t-2 border-r-2 border-opacity-25">
                        <div className="ml-10 py-1">Home</div> 
                    </button>
                    <button className="flex rounded-md w-full transform hover:translate-x-2 text-left select-none font-bold items-center order-4 bg-pink bg-opacity-25 border-white -ml-2 mr-2 border-t-2 border-b-2 border-r-2  border-opacity-25" onClick={() => {setChannelCollapse(!channelCollapse)}}>
                        <Collapse />
                        <span className="my-1">Channels</span>
                    </button>
                    {!channelCollapse &&                     
                        <ChannelList 
                            recallChannels={recallChannels} 
                        />
                    }
                    <button className="flex rounded-md w-full transform hover:translate-x-2 text-left select-none font-bold items-center order-4 bg-pink bg-opacity-25 border-black border-b-2 -ml-2 mr-2 border-t-2 border-r-2 border-opacity-25" onClick={() => {setContactCollapse(!contactCollapse)}}>
                        <Collapse />
                        <span className="my-1">Contacts</span>
                    </button>
                    {!contactCollapse &&         
                        <ContactList />
                    }

                    {/* TODO: Create modal for CreateChannel */}
                    {/* <CreateChannel 
                        handleRecallChannels={handleRecallChannels} 
                    /> */}
                    
                    {/* TODO: Create modal for AddContact */}
                    {/* <AddContact /> */}
                    

                    <Logout /> 
                </div>
            </div>
        )
    }
    else {
        return <div></div>
    }
}

export default Menu
