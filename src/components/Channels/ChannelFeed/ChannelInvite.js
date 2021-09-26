import { useState, useRef, useContext } from 'react'
import {postAPI} from '../../../helpers/useAxiosPost'
import { channelAddUserUrl, inviteToChannelAuditText } from '../../../helpers/constants'
import { ClientContext } from '../../../context/ClientContext';

const ChannelInvite = ({details, handleRecallMembers}) => {
    const { headers } = useContext(ClientContext)

    // Input field references
    const memberName = useRef();

    // State for error message
    const [errorMessage, setErrorMessage] = useState(null)

    // Function to submit a post request for creating a new channel with user
    const createChannel = (e) => {
        e.preventDefault();
        setErrorMessage(null) // remove previously set error message
        // data needed to fulfill API request
        const requestData = {
            id: details.id,
            member_id: memberName.current.value //TODO: change value to member_id
        }
        // Call function from useAxiosPost.js - postAPI(url, requestData, headers, auditTrail)
        // API for this function needs both body and headers
        postAPI(channelAddUserUrl, requestData, headers, inviteToChannelAuditText)
        .then(data => {
            data[2]
            ?
            // Sets error message from error response - this is specifically for Creating of Channel API since it always retrieves a response, not a POST error
            setErrorMessage(data[2][0])
            :
            // Calls function that has a side-effect of re-requesting the API to fetch Channel List
            handleRecallMembers()
        })
    }

    return (
        <div className="ChannelInvite">
            {/* Add Member Form */}
            <form onSubmit={(e) => createChannel(e)}>
                <input type="text" ref={memberName} placeholder="Member Name"/> {/* TODO: fix such that member_id is found from user list, might need useContext? */}
                <button type="submit">Invite Member</button>
            </form>
            
            {/* Display error message if it exists */}
            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
    )
}

export default ChannelInvite