import { useParams } from "react-router-dom";
import ContactsHeader from "./ContactsHeader";
import DirectMessageList from './DirectMessages/DirectMessageList/DirectMessageList'
import CreateDirectMessage from './DirectMessages/CreateDirectMessage'

const ContactsFeed = () => {
    // get contact id from url
    const { id, uid } = useParams()

    return (
        <div className="ContactsFeed feed">
            <strong>Channel Feed</strong>

            <ContactsHeader
                uid={uid}
            />
            
            <DirectMessageList 
                id={id}
            />

            <CreateDirectMessage 
                uid={uid}
                id={id}
            />
        </div>
    )
}

export default ContactsFeed
