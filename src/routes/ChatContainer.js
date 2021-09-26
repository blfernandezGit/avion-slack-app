import { useState } from 'react'
import { v4 as uuid_v4 } from "uuid";
import { Switch, Route } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import UserList from '../components/Users/UserList'
import CreateChannel from '../components/Channels/CreateChannel'
import ChannelFeed from '../components/Channels/ChannelFeed/ChannelFeed'
import Header from '../components/Menu/Header'

const ChatContainer = () => {
    const [recallMembers, setRecallMembers] = useState(null)

    // function that changes memberChannels state every call such that it can be added as a useEffect dependency in useAxiosGet call by MemberList
    // basically a function to re-render Member List whenever a new Member is added locally
    // TODO: improve if possible - since currently just setting a state to a unique id - uuid_v4() so that API request is called every time the function is called

    const handleRecallMembers = () => {
        setRecallMembers(uuid_v4())
    }

    return (
        <div className="ChatContainer">

            {/* login details - temporary location TODO: move to separate component */}
            {/* <div>Logged In!</div>
            <div>Email: {fetchedData.email}</div>
            <div>Name: {fetchedData.name}</div>
            <div>Image: {fetchedData.image}</div> */}

            {/* headers - can be removed */}
            {/* <div>access-token: {headers['access-token']}</div>
            <div>client: {headers.client}</div>
            <div>expiry: {headers.expiry}</div>
            <div>uid: {headers.uid}</div> */}

            <Header />
            <Menu />
            <Switch>
                <Route path='/client/users/message'>
                    {/* User List TODO: put add message container here then add user list as component there*/}
                    <UserList />
                </Route>
                <Route path='/client/channels/:id'>
                    {/* Channel Specific Messages */}
                    <ChannelFeed 
                        recallMembers={recallMembers}
                        handleRecallMembers={handleRecallMembers}
                    />
                </Route>
            </Switch>
            
        </div>
    )
}

export default ChatContainer
