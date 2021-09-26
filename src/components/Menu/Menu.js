import { useState } from 'react'
import { v4 as uuid_v4 } from "uuid";
import Logout from '../Home/Logout'
import ChannelList from '../Channels/ChannelList/ChannelList'
import CreateChannel from '../Channels/CreateChannel'

const Menu = () => {
    const [recallChannels, setRecallChannels] = useState(null)

    // function that changes recallChannels state every call such that it can be added as a useEffect dependency in useAxiosGet call by ChannelList
    // basically a function to re-render Channel List whenever a new Channel is created locally
    // TODO: improve if possible - since currently just setting a state to a unique id - uuid_v4() so that API request is called every time the function is called
    const handleRecallChannels = () => {
        setRecallChannels(uuid_v4())
    }
    
    //TODO: add link to a default page /client to remove view from messages
    return (
        <div className="Menu">
            <Logout /> {/* Can be moved to header or anywhere else */}
            {/* TODO: Create modal for CreateChannel */}
            <CreateChannel 
                handleRecallChannels={handleRecallChannels} 
            />
            <ChannelList 
                recallChannels={recallChannels}
            />
        </div>
    )
}

export default Menu
