import { useContext } from 'react'
import { useParams } from "react-router-dom";
import useAxiosGet from '../../../helpers/useAxiosGet'
import { channelsBaseUrl, channelRetrieveAuditText } from '../../../helpers/constants'
import { ClientContext } from '../../../context/ClientContext';
import ChannelHeader from './ChannelHeader'

const ChannelFeed = ({recallMembers, handleRecallMembers}) => {
    // get channel id from url
    const { id } = useParams();
    
    // get required headers from context
    const { headers } = useContext(ClientContext)

    // define url with channel id
    let channelUrl = channelsBaseUrl+'/'+id

    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving channel details
    const {fetchedData: details, isLoading} = useAxiosGet( channelUrl, headers, null, channelRetrieveAuditText, recallMembers )

    return (
        <div className="ChannelFeed">
            <strong>Channel Feed</strong>
            { isLoading && <p>Loading...</p> }

            <ChannelHeader 
                details={details}
                handleRecallMembers={handleRecallMembers}
            />
        </div>
    )
}

export default ChannelFeed
