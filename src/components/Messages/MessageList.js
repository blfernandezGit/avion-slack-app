import { useContext } from 'react'
import MessageTable from './MessageTable'
import { messagesBaseUrl, channelMessagesAuditText, channelReceiverClass, userReceiverClass } from '../../helpers/constants'
import { ClientContext } from '../../context/ClientContext'
import useAxiosGetMessages from '../../helpers/useAxiosGetMessages'

const MessageList = ({details, id}) => {
    const { headers } = useContext(ClientContext)

    let userId
    let receiverClass

    if( details ) { 
        userId = details.id
        receiverClass = channelReceiverClass
    } else {
        userId = id
        receiverClass = userReceiverClass
    }

    const messageUrl = messagesBaseUrl+'?receiver_id='+userId+'&receiver_class='+receiverClass;

    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving Channels of User
    const { fetchedData: messages, isLoading, errorMessage } = useAxiosGetMessages( messageUrl, headers, null, channelMessagesAuditText )

    return (
        <>
            <div className="h-12"> test </div>
            <div className="w-full h-double-header-negative overflow-y-auto overflow-x-hidden">
                    { isLoading && <p>Loading...</p> }

                    { (messages && messages.length>0) ? 
                        <MessageTable messages={messages} /> //Table component that displays list of Channels for User
                        :
                        <div>Start Conversation</div>
                    }

                    { errorMessage &&  <div>{errorMessage}</div> }
            </div>
        </>
    )
}

export default MessageList