import { useContext } from 'react'
import DirectMessageTable from './DirectMessageTable'
import { messagesBaseUrl, directMessagesAuditText, userReceiverClass } from '../../../../../helpers/constants'
import { ClientContext } from '../../../../../context/ClientContext';
import useAxiosGetMessages from '../../../../../helpers/useAxiosGetMessages';

const ChannelMessageList = ({id}) => {
    const { headers } = useContext(ClientContext)

    // define url with channel id
    let messageUrl = messagesBaseUrl+'?receiver_id='+id+'&receiver_class='+userReceiverClass

    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving Channels of User
    const {fetchedData: messages, isLoading, errorMessage} = useAxiosGetMessages(messageUrl, headers, null, directMessagesAuditText)

    // console.log(messages)
    return (
        <div className="DirectMessageList message-list">
            <strong>Direct Message List</strong>
            { isLoading && <p>Loading...</p> }

            { (messages && messages.length>0) ? 
                <DirectMessageTable messages={messages} /> //Table component that displays list of Channels for User
                :
                <div>Start Conversation</div>
            }

            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
    )
}

export default ChannelMessageList