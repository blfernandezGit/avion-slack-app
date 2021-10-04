import { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom"
import FeedHeader from '../components/FeedHeader'
import MessageList from '../components/Messages/MessageList'
import ChatBox from '../components/ChatBox'
import Feed from '../../../Assets/Elements/Feed'
import { ClientContext } from '../../../../context/ClientContext'

const ContactFeed = () => {
    const { id, uid } = useParams()

    const { handleShowWelcome } = useContext( ClientContext )

    useEffect(() => {
        handleShowWelcome(false)
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
