import { useState, useRef, useContext } from 'react'
import {postAPI} from '../../../helpers/useAxiosPost'
import { channelAddUserUrl, inviteToChannelAuditText } from '../../../helpers/constants'
import { ClientContext } from '../../../context/ClientContext';
import UserList from '../../Users/UserList'

const ChannelInvite = ({details, handleRecallMembers}) => {
    const { headers } = useContext(ClientContext)

    // State for search query
    const [searchQuery, setSearchQuery] = useState('')

    // State for error message
    const [errorMessage, setErrorMessage] = useState(null)

    // Function to submit a post request for creating a new channel with user
    const channelInvite = (user_id) => {
        setErrorMessage(null) // remove previously set error message
        // data needed to fulfill API request
        const requestData = {
            id: details.id,
            member_id: user_id
        }
        // Call function from useAxiosPost.js - postAPI(url, requestData, headers, auditTrail)
        // API for this function needs both body and headers
        postAPI(channelAddUserUrl, requestData, headers, inviteToChannelAuditText)
        .then(data => {
            data[2]
            ?
            // Sets error message from error response - this is specifically for Creating of Channel API since it always retrieves a response, not a POST error
            setErrorMessage(data[2])
            :
            // Calls function that has a side-effect of re-requesting the API to fetch Channel List
            handleRecallMembers()
        })

    }

    return (
        <div className="ChannelInvite">
            {/* Search User form */}
            <form onSubmit={(e) => channelInvite(e)}>
                <input type="text" placeholder="User Email" onChange={(e) =>setSearchQuery(e.target.value)}/> 
            </form>

            <UserList 
                onClick={channelInvite}
                searchQuery={searchQuery}
            />
            
            {/* Display error message if it exists */}
            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
    )
}

export default ChannelInvite