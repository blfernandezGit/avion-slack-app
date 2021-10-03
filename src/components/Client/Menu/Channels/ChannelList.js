import { useContext } from 'react'
import useAxiosGet from '../../../../helpers/useAxiosGet'
import Channels from './Channels'
import { channelsBaseUrl, channelListAuditText } from '../../../../helpers/constants'
import { ClientContext } from '../../../../context/ClientContext'



const ChannelList = ({recallChannels}) => {
    const { headers } = useContext(ClientContext)
    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving Channels of User
    const {fetchedData: channels, isLoading, errorMessage} = useAxiosGet(channelsBaseUrl, headers, null, channelListAuditText, recallChannels)
    return (
        <div className="border-black">

            <div>
                { isLoading && <p>Loading...</p> }

                {/* Table component that displays list of Channels for User */}
                { channels && channels.map(channel => {
                    return <Channels key={channel.id}  channel = {channel}/>
                }) }

                { errorMessage &&  <div>{errorMessage}</div> }
                
            </div>
        </div>
    )
}

export default ChannelList