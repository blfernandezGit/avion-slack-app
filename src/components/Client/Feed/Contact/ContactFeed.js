import { useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import { ClientContext } from '../../../../context/ClientContext'
import FeedHeader from '../components/FeedHeader'
import MessageList from '../components/Messages/MessageList'
import ChatBox from '../components/ChatBox'
import Feed from '../../../Assets/Elements/Feed'

const ContactFeed = () => {
    const { id, uid } = useParams()

    const { handleShowMenu } = useContext(ClientContext)

    // change menu show state when id changes
    useEffect(() => {
        handleShowMenu()
        //eslint-disable-next-line
    }, [id])

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