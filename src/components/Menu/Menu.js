import { useState, useContext } from 'react'
import { v4 as uuid_v4 } from "uuid"
import Logout from '../Home/Logout'
import ChannelList from '../Channels/ChannelList/ChannelList'
import CreateChannel from '../Channels/CreateChannel'
import AddContact from '../Contacts/AddContact'
import ContactList from '../Contacts/ContactList/ContactList'
import { ClientContext } from '../../context/ClientContext'

const Menu = () => {
    const { showMenu } = useContext(ClientContext)

    const [recallChannels, setRecallChannels] = useState(null)

    // function that changes recallChannels state every call such that it can be added as a useEffect dependency in useAxiosGet call by ChannelList
    // basically a function to re-render Channel List whenever a new Channel is created locally
    // TODO: improve if possible - since currently just setting a state to a unique id - uuid_v4() so that API request is called every time the function is called
    const handleRecallChannels = () => {
        setRecallChannels(uuid_v4())
    }
    console.log(showMenu)
    
    //TODO: add link to a default page /client to remove view from messages
    if(showMenu){
        return (
            <div className="bg-black h-full text-white pt-12">  {/* PADDING SA LAHAT PARA SA HEADER*/}
                {/* Add home component */}
                <div>Home</div>

                {/* TODO: Create modal for CreateChannel */}
                {/* <CreateChannel 
                    handleRecallChannels={handleRecallChannels} 
                /> */}
                <ChannelList 
                    recallChannels={recallChannels}
                />
                {/* TODO: Create modal for AddContact */}
                {/* <AddContact /> */}
                <ContactList />  
                <Logout /> 
            </div>
        )
    }
    else {
        return <div></div>
    }
}

export default Menu
