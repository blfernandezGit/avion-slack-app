import { Switch, Redirect, Route } from 'react-router-dom'
import Menu from '../components/Client/Menu/Menu'
import ChannelFeed from '../components/Client/Feed/Channel/ChannelFeed'
import Header from '../components/Client/Header/Header'
import ContactFeed from '../components/Client/Feed/Contact/ContactFeed'
import HomePage from '../components/Client/HomePage'
import Welcome from '../components/Client/Welcome'

const ChatContainer = () => {
    return (
        <div className="h-full w-full relative">
            <Header />
            <Menu />
            <HomePage />
            <Switch>
                <Route path='/client/home'>
                    <Welcome />
                </Route>
                <Route path='/client/channels/:id'>
                    <ChannelFeed />
                </Route>
                <Route path='/client/messages/:id/:uid'>
                    <ContactFeed />
                </Route>
            </Switch>
            <Redirect path='/client' to='/client/home'></Redirect>
        </div>
    )
}

export default ChatContainer
