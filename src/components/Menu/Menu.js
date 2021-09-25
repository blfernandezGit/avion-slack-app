import Logout from '../Home/Logout'
import ChannelList from '../Channels/ChannelList/ChannelList'

const Menu = ({recallChannels}) => {
    return (
        <div className="menu">
            <Logout />
            {/* Channel List */}
            <ChannelList
                recallChannels={recallChannels}
            />
        </div>
    )
}

export default Menu
