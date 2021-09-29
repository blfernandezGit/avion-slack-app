import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import ChannelFeed from '../components/Channels/ChannelFeed/ChannelFeed'
import Header from '../components/Menu/Header'
import ContactsFeed from '../components/Contacts/ContactsFeed/ContactsFeed'

const ChatContainer = () => {
    return (
        <div className="h-screen">
            <Header />
            <Menu />
            <Switch>
                <Route path='/client/channels/:id'>
                    <ChannelFeed />
                </Route>
                <Route path='/client/messages/:id/:uid'>
                    <ContactsFeed />
                </Route>
            </Switch>

        </div>
    )
}

export default ChatContainer
