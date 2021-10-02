import { Switch, Route } from 'react-router-dom'
import Menu from '../components/Client/Menu/Menu'
import ChannelFeed from '../components/Client/Feed/Channel/ChannelFeed'
import Header from '../components/Client/Header/Header'
import ContactFeed from '../components/Client/Feed/Contact/ContactFeed'

const ChatContainer = () => {
    return (
        <div className="h-full w-full relative">
            <Header />
            <Menu />
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
