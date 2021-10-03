import { useState, useRef, useContext } from 'react'
import {postAPI} from '../../../../helpers/useAxiosPost'
import { messagesBaseUrl, sendChannelMessageAuditText, channelReceiverClass } from '../../../../helpers/constants'
import { ClientContext } from '../../../../context/ClientContext'
import  PaperPlane  from '../../../Assets/Images/PaperPlane'


const CreateChannelMessages = ({details}) => {
    const { headers } = useContext(ClientContext)

    // Input field references
    const bodyRef = useRef()

    // State for error message
    const [errorMessage, setErrorMessage] = useState(null)

    // Function to submit a post request for creating a new channel with user
    const createChannelMessage = (e) => {
        e.preventDefault()
        setErrorMessage(null) // remove previously set error message
        // data needed to fulfill API request
        const requestData = {
            receiver_id: details.id,
            receiver_class: channelReceiverClass,
            body: bodyRef.current.value
        }
        // Call function from useAxiosPost.js - postAPI(url, requestData, headers, auditTrail)
        // API for this function needs both body and headers
        postAPI(messagesBaseUrl, requestData, headers, sendChannelMessageAuditText)
        .then(data => {
            // console.log(data) TODO: think what should be added here?
        })
        bodyRef.current.value = null
    }

    const placeholder = `Message #${details.name}`

    return (
        <div className="h-16 relative w-screen">
            <div className="fixed bottom-0 h-12 w-screen flex justify-center items-center">
                {/* Add Member Form */}
                <form onSubmit={(e) => createChannelMessage(e)} className="flex">
                    <input type="text" ref={bodyRef} placeholder={placeholder} className="bg-transparent max-w-screen w-full border-2 border-white focus:border-pink focus:outline-none rounded-md text-center text-white w-full"/>
                    <button type="submit" className="text-pink"><PaperPlane/></button>
                </form>
                
                {/* Display error message if it exists */}
                { errorMessage &&  <div>{errorMessage}</div> }
            </div>
        </div>
    )
}

export default CreateChannelMessages