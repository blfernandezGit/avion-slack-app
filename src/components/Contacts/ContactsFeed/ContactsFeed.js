import { useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import ContactsHeader from "./ContactsHeader"
import MessageList from '../../Messages/MessageList'
import CreateDirectMessage from './CreateDirectMessages'
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
        <div className="relative h-header-negative">
            <strong>Contacts Feed</strong>

            <ContactsHeader
                uid={uid}
            />
            
            <MessageList 
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
