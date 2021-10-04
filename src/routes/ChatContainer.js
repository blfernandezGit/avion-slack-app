import { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from '../components/Client/Menu/Menu'
import ChannelFeed from '../components/Client/Feed/Channel/ChannelFeed'
import Header from '../components/Client/Header/Header'
import ContactFeed from '../components/Client/Feed/Contact/ContactFeed'
import HomePage from '../components/Client/HomePage'
import Welcome from '../components/Client/Welcome'
import { ClientContext } from '../context/ClientContext'

const ChatContainer = () => {
    const { showWelcome } = useContext(ClientContext)
    return (
        <div className="h-full w-full relative">
            <Header />
            <Menu />
            { showWelcome && <Welcome />}
            <HomePage />
            <Switch>
                <Route path='/client/channels/:id'>
                    <ChannelFeed />
                </Route>
                <Route path='/client/messages/:id/:uid'>
                    <ContactFeed />
                </Route>
            </Switch>
        </div>
    )
}

export default ChatContainer
