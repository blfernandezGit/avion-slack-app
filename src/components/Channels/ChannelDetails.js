import { useContext } from 'react'
import { useParams } from "react-router-dom";
import useAxiosGet from '../../helpers/useAxiosGet'
import { channelsBaseUrl, channelRetrieveAuditText } from '../../helpers/constants'
import { ClientContext } from '../../context/ClientContext';

const ChannelDetails = () => {
    const { id } = useParams();
    // console.log(id)
    const { headers } = useContext(ClientContext)
    const channelUrl = channelsBaseUrl+'/'+id
    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving channel details
    const {fetchedData: details, isLoading, errorMessage} = useAxiosGet( channelUrl, headers, null, channelRetrieveAuditText )

    //FIXME: details do not change on click - might need to use states?

    console.log(details)
    return (
        <div>
            <strong>Channel Details</strong>
            { isLoading && <p>Loading...</p> }
            
            {/* Table component that displays list of Users */}
            {/* { users && <UserTable users={users} /> } */}

            { details &&
                <>
                    <div>Channel Owner: {details.owner_id}</div>
                    <div>Channel Name: {details.name}</div>
                    <div>Channel ID: {details.id}</div>
                    <div>Channel Members {details?.channel_members[0]?.user_id}</div>
                </>
            }
            
            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
    )
}

export default ChannelDetails
