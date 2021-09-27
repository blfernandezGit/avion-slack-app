import { Switch, Route } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import UserList from '../components/Users/UserList'
import ChannelFeed from '../components/Channels/ChannelFeed/ChannelFeed'
import Header from '../components/Menu/Header'
import ContactsFeed from '../components/Contacts/ContactsFeed/ContactsFeed'

const ChatContainer = () => {
    return (
        <div className="ChatContainer">

            {/* login details - temporary location TODO: move to separate component */}
            {/* <div>Logged In!</div>
            <div>Email: {fetchedData.email}</div>
            <div>Name: {fetchedData.name}</div>
            <div>Image: {fetchedData.image}</div> */}

            <Header />
            <Menu />
            <Switch>
                <Route path='/client/users/message'>
                    {/* User List TODO: put add message container here then add user list as component there*/}
                    <UserList />
                </Route>
                <Route path='/client/channels/:id'>
                    {/* Channel Specific Messages */}
                    <ChannelFeed />
                </Route>
                <Route path='/client/messages/:id/:uid'>
                    {/* Contact Specific Messages */}
                    <ContactsFeed />
                </Route>
            </Switch>

            
        </div>
    )
}

export default ChatContainer
