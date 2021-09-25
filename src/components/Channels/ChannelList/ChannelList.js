import useAxiosGet from '../../../helpers/useAxiosGet';
import ChannelsTable from './ChannelsTable'
import { channelsBaseUrl, channelListAuditText } from '../../../helpers/constants'

const ChannelList = ({headers, recallChannels}) => {
    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving Channels of User
    const {fetchedData: channels, isLoading, errorMessage} = useAxiosGet(channelsBaseUrl, headers, null, channelListAuditText, recallChannels)
    // console.log(errorMessage)
    return (
        <div>
            <strong>Channel List</strong>
            { isLoading && <p>Loading...</p> }

            {/* Table component that displays list of Channels for User */}
            { channels && <ChannelsTable channels={channels} /> }

            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
    )
}

export default ChannelList