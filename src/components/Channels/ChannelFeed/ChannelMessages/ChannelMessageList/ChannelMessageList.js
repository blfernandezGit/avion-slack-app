import { useContext } from 'react'
import ChannelMessageTable from './ChannelMessageTable'
import { messagesBaseUrl, channelMessagesAuditText, channelReceiverClass } from '../../../../../helpers/constants'
import { ClientContext } from '../../../../../context/ClientContext'
import useAxiosGetMessages from '../../../../../helpers/useAxiosGetMessages'

const ChannelMessageList = ({details}) => {
    const { headers } = useContext(ClientContext)

    // define url with channel id
    let messageUrl = messagesBaseUrl+'?receiver_id='+details.id+'&receiver_class='+channelReceiverClass

    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving Channels of User
    const {fetchedData: messages, isLoading, errorMessage} = useAxiosGetMessages(messageUrl, headers, null, channelMessagesAuditText)

    return (
        <div className="ChannelMessageList message-list">
            <strong>Channel Message List</strong>
            { isLoading && <p>Loading...</p> }

            { (messages && messages.length>0) ? 
                <ChannelMessageTable messages={messages} /> //Table component that displays list of Channels for User
                :
                <div>Start Conversation</div>
            }

            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
    )
}

export default ChannelMessageList