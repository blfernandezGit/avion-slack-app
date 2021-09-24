import { useState, useRef } from 'react'
import {postAPI} from '../../helpers/useAxiosPost'
import { channelsBaseUrl, channelCreateAuditText } from '../../helpers/constants'

const CreateChannel = ({ headers, handleRecall }) => {
    // Input field references
    const channelNameRef = useRef();

    // State for error message
    const [errorMessage, setErrorMessage] = useState(null)

    // Function to submit a post request for creating a new channel with user
    const createChannel = (e) => {
        e.preventDefault();
        // data needed to fulfill API request
        const requestData = {
            name: channelNameRef.current.value,
            user_ids: []
        }
        // Call function from useAxiosPost.js - postAPI(url, requestData, headers, auditTrail)
        // API for this function needs both body and headers
        postAPI(channelsBaseUrl, requestData, headers, channelCreateAuditText)
            .then(data => {
                // TODO: Might need to change this since no data is being retrieved from this buggy API
                // temporarily calls function that has a side-effect of re-requesting the API to fetch Channel List
                handleRecall()
            })
            .catch(error => {
                // Set error message from error response
                // TODO: Might need to change this since error is always being retrieved from this buggy API
                setErrorMessage(error)
                // Calls function to re-render Channel List
                handleRecall()
            })
    }

    return (
        <div>
            {/* Create Channel Form */}
            <form onSubmit={(e) => createChannel(e)}>
                <input type="text" ref={channelNameRef} placeholder="Channel Name"/>
                <button type="submit">Create Channel</button>
            </form>
            
            {/* Display error message if it exists */}
            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
    )
}

export default CreateChannel
