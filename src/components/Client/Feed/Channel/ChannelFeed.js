import { useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import { ClientContext } from '../../../../context/ClientContext'
import useAxiosGet from '../../../../helpers/useAxiosGet'
import { channelsBaseUrl, channelRetrieveAuditText } from '../../../../helpers/constants'
import FeedHeader from '../components/FeedHeader'
import MessageList from '../components/Messages/MessageList'
import ChatBox from '../components/ChatBox'
import Feed from '../../../Assets/Elements/Feed'

const ChannelFeed = () => {
    const { id } = useParams()
    const { headers, recall, handleRecall, handleShowMenu, handleShowWelcome } = useContext(ClientContext)
    const channelUrl = channelsBaseUrl + '/' + id
    const { fetchedData: details, isLoading } = useAxiosGet( channelUrl, headers, null, channelRetrieveAuditText, recall )

    // change menu show state when id changes
    useEffect(() => {
        handleShowMenu()
        handleShowWelcome(false)
        //eslint-disable-next-line
    }, [id])

    return (
        <Feed >
            <FeedHeader
                details = { details }
                handleRecall = { handleRecall } 
            />
            
            <MessageList 
                isLoading = { isLoading }
                details = { details } 
            />

            <ChatBox 
                details = { details } 
            />

        </Feed>
    )
}

export default ChannelFeed
