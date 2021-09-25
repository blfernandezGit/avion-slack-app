import { useState, useRef, useContext } from 'react'
import {postAPI} from '../../helpers/useAxiosPost'
import { channelsBaseUrl, channelCreateAuditText } from '../../helpers/constants'
import { ClientContext } from '../../context/ClientContext';

const CreateChannel = () => {
    const { headers, handleRecall } = useContext(ClientContext)

    // Input field references
    const channelNameRef = useRef();

    // State for error message
    const [errorMessage, setErrorMessage] = useState(null)

    // Function to submit a post request for creating a new channel with user
    const createChannel = (e) => {
        e.preventDefault();
        setErrorMessage(null) // remove previously set error message
        // data needed to fulfill API request
        const requestData = {
            name: channelNameRef.current.value,
            user_ids: []
        }
        // Call function from useAxiosPost.js - postAPI(url, requestData, headers, auditTrail)
        // API for this function needs both body and headers
        postAPI(channelsBaseUrl, requestData, headers, channelCreateAuditText)
            .then(data => {
                data[2]
                ?
                // Sets error message from error response - this is specifically for Creating of Channel API since it always retrieves a response, not a POST error
                setErrorMessage(data[2][0])
                :
                // Calls function that has a side-effect of re-requesting the API to fetch Channel List
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
