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
            <div className="flex bg-dirtyWhite min-h-screen max-w-screen text-white pt-12 flex-col overflow-auto">  {/* PADDING SA LAHAT PARA SA HEADER*/}
                {/* Add home component */}
                <div className="">
                    <div className="py-1 rounded-md flex w-screen text-left select-none font-bold items-center order-4 bg-black bg-opacity-25 border-white border-4 border-b-2 border-opacity-25">Home</div>
                    <div className="flex rounded-md w-screen text-left select-none font-bold items-center order-4 bg-black bg-opacity-25 border-white border-4  border-opacity-25" onClick={() => {setChannelCollapse(!channelCollapse)}}>
                        <Collapse />
                        <span className="my-1">Channels</span>
                    </div>
                    {!channelCollapse &&                     
                        <ChannelList 
                            recallChannels={recallChannels} 
                        />
                    }
                    <div className="flex rounded-md w-screen text-left select-none font-bold items-center order-4 bg-black bg-opacity-25 border-white border-4 border-t-2 border-opacity-25" onClick={() => {setContactCollapse(!contactCollapse)}}>
                        <Collapse/>
                        <span className="my-1">Contacts</span>
                    </div>
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
