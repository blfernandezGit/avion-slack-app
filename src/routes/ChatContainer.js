import { Switch, Route } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import UserList from '../components/Users/UserList'
import CreateChannel from '../components/Channels/CreateChannel'

const ChatContainer = () => {
    return (
        <div className="chat-container">

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

            <Menu />
            <Switch>
                <Route path='/client/channels/create'>
                    {/* Create Channel Form */}
                    <CreateChannel />
                </Route>
                <Route path='/client/users/list'>
                    {/* User List */}
                    <UserList />
                </Route>
            </Switch>
            
        </div>
    )
}

export default ChatContainer
