import { useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import ContactsHeader from "./ContactsHeader"
import DirectMessageList from './DirectMessages/DirectMessageList/DirectMessageList'
import CreateDirectMessage from './DirectMessages/CreateDirectMessage'
import { ClientContext } from '../../../context/ClientContext'

const ContactsFeed = () => {
    // get contact id from url
    const { id, uid } = useParams()

    // get handleShowMenu function from context
    const { handleShowMenu } = useContext(ClientContext)

    // change menu show state when id changes
    useEffect(() => {
        handleShowMenu()
        //eslint-disable-next-line
    }, [id])

    return (
        <div className="ContactsFeed feed">
            <strong>Contacts Feed</strong>

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
