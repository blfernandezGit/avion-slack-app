import { useState, useContext, useEffect } from 'react'
import { useParams } from "react-router-dom"
import useAxiosGet from '../../../helpers/useAxiosGet'
import { channelsBaseUrl, channelRetrieveAuditText } from '../../../helpers/constants'
import { ClientContext } from '../../../context/ClientContext'
import ChannelHeader from './ChannelHeader'
import CreateChannelMessages from './ChannelMessages/CreateChannelMessage'
import MessageList from '../../Messages/MessageList'
import { v4 as uuid_v4 } from "uuid"

const ChannelFeed = () => {
    const [recallMembers, setRecallMembers] = useState(null) 

    // function that changes memberChannels state every call such that it can be added as a useEffect dependency in useAxiosGet call by MemberList
    // basically a function to re-render Member List whenever a new Member is added locally
    // TODO: improve if possible - since currently just setting a state to a unique id - uuid_v4() so that API request is called every time the function is called
    const handleRecallMembers = () => {
        setRecallMembers(uuid_v4())
    }

    // get channel id from url
    const { id } = useParams()
    
    // get required headers and handleShowMenu function from context
    const { headers, handleShowMenu } = useContext(ClientContext)

    // define url with channel id
    let channelUrl = channelsBaseUrl+'/'+id

    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving channel details
    const {fetchedData: details, isLoading} = useAxiosGet( channelUrl, headers, null, channelRetrieveAuditText, recallMembers )

    // change menu show state when id changes
    useEffect(() => {
        handleShowMenu()
        //eslint-disable-next-line
    }, [id])

    return (
        <div className="ChannelFeed feed">
            <strong>Channel Feed</strong>
            { isLoading && <p>Loading...</p> }

            <ChannelHeader 
                details={details}
                handleRecallMembers={handleRecallMembers}
            />

            {details && 
                <>
                    <MessageList 
                        details={details}
                    />
                    <CreateChannelMessages 
                        details={details}
                    />
                </>
            }
        </div>
    )
}

export default ChannelFeed
