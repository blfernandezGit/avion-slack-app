import { useState, useRef, useContext } from 'react'
import {postAPI} from '../../../../helpers/useAxiosPost'
import { messagesBaseUrl, sendChannelMessageAuditText, sendDirectMessageAuditText, channelReceiverClass, userReceiverClass } from '../../../../helpers/constants'
import { ClientContext } from '../../../../context/ClientContext'
import FormInput from '../../../Assets/Elements/FormInput'

const ChatBox = ({ details, id, uid }) => {
    const { headers, handleRecall } = useContext(ClientContext)

    // Input field references
    const bodyRef = useRef()

    // State for error message
    const [errorMessage, setErrorMessage] = useState(null)

    // Function to submit a post request for creating a new channel with user
    const createMessage = (e) => {
        e.preventDefault()
        setErrorMessage(null) 
        const requestData = {
            receiver_id: details ? details.id : id,
            receiver_class: details ? channelReceiverClass : userReceiverClass,
            body: bodyRef.current.value
        }
        postAPI(
            messagesBaseUrl, 
            requestData, 
            headers, 
            details ? sendChannelMessageAuditText : sendDirectMessageAuditText
        ).then( data => {
            handleRecall()
        })
        bodyRef.current.value = null
    }

    let placeholder = "Message "
    details ? placeholder += `#${ details.name }` : placeholder += `${ uid }`

    return (
            <div className="absolute bottom-0 h-12 w-full flex justify-center items-center">
                <form onSubmit={(e) => createMessage(e)} className="h-full w-full px-6">
                    <FormInput type="text" reference={bodyRef} placeholder={placeholder} inputName='chatBox' chat={true}/>
                </form>
                
                {/* Display error message if it exists */}
                { errorMessage &&  <div>{errorMessage}</div> }
            </div>
    )
}

export default ChatBox