import Logout from '../Home/Logout'
import ChannelList from '../Channels/ChannelList/ChannelList'
import MessagesList from '../Messages/MessageList/MessageList'

const Menu = ({recallChannels}) => {
    return (
        <div className="menu">
            <Logout />
            {/* Channel List */}
            <ChannelList
                recallChannels={recallChannels}
            />
            <MessagesList/>
        </div>
    )
}

export default Menu
