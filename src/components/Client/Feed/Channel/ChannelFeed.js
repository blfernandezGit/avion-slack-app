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
    const { headers, recall, handleRecall } = useContext(ClientContext)
    const channelUrl = channelsBaseUrl + '/' + id
    const { fetchedData: details, isLoading } = useAxiosGet( channelUrl, headers, null, channelRetrieveAuditText, recall )

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
