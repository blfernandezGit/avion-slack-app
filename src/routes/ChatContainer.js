import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import UserList from '../components/Users/UserList'
import CreateChannel from '../components/Channels/CreateChannel'
import { v4 as uuid_v4 } from "uuid";

const ChatContainer = ({fetchedData, headers, setLoginDetails}) => {
    const [recallChannels, setRecallChannels] = useState(null)

    // function that changes recallChannels state every call such that it can be added as a useEffect dependency in useAxiosGet call by ChannelList
    // basically a function to re-render Channel List whenever a new Channel is created locally
    // TODO: improve if possible - since currently just setting a state to a unique id - uuid_v4() so that API request is called every time the function is called
    const handleRecall = () => {
        setRecallChannels(uuid_v4())
    }

    return (
        <div className="chat-container">

            {/* login details - temporary location TODO: move to separate component */}
            {/* <div>Logged In!</div>
            <div>Email: {fetchedData.email}</div>
            <div>Name: {fetchedData.name}</div>
            <div>Image: {fetchedData.image}</div> */}

            {/* headers - can be removed */}
            <div>access-token: {headers['access-token']}</div>
            <div>client: {headers.client}</div>
            <div>expiry: {headers.expiry}</div>
            <div>uid: {headers.uid}</div>

            <Menu />
            <Switch>
                <Route 
                    path="/" 
                    exact 
                    render={props => <CreateChannel/>}
                />
                <Route path='/client/channels/create'>
                    <CreateChannel/>
                </Route>
                <Route path='/client/channels/list'>
                    <UserList 
                        headers={headers}
                    />
                </Route>
            </Switch>

            
        </div>
    )
}

export default ChatContainer
