import { useContext } from 'react'
import ChannelMessageTable from './ChannelMessageTable'
import { messagesBaseUrl, channelMessagesAuditText, channelReceiverClass } from '../../../../../helpers/constants'
import { ClientContext } from '../../../../../context/ClientContext';
import useAxiosGetMessages from '../../../../../helpers/useAxiosGetMessages';

//TODO: try to retrieve messages live???? currently just local changes are live fed - sse ba lmao 

const ChannelMessageList = ({details}) => {
    const { headers } = useContext(ClientContext)

    // define url with channel id
    let messageUrl = messagesBaseUrl+'?receiver_id='+details.id+'&receiver_class='+channelReceiverClass

    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving Channels of User
    const {fetchedData: messages, isLoading, errorMessage} = useAxiosGetMessages(messageUrl, headers, null, channelMessagesAuditText)
    // console.log(errorMessage)
    return (
        <div className="ChannelMessageList message-list">
            <strong>Channel Message List</strong>
            { isLoading && <p>Loading...</p> }

            {/* Table component that displays list of Channels for User */}
            { messages && <ChannelMessageTable messages={messages} /> }

            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
    )
}

export default ChannelMessageList