import { useParams } from "react-router-dom"
import FeedHeader from '../components/FeedHeader'
import MessageList from '../components/Messages/MessageList'
import ChatBox from '../components/ChatBox'
import Feed from '../../../Assets/Elements/Feed'

const ContactFeed = () => {
    const { id, uid } = useParams()

    return (
        <Feed >
            <FeedHeader
                uid={uid}
            />
            
            <MessageList 
                id={id}
            />

            <ChatBox 
                uid={uid}
                id={id}
            />
        </Feed>
    )
}

export default ContactFeed
