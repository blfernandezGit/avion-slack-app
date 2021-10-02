import { useState, useRef, useContext } from 'react'
import {postAPI} from '../../../../helpers/useAxiosPost'
import { channelsBaseUrl, channelCreateAuditText } from '../../../../helpers/constants'
import { ClientContext } from '../../../../context/ClientContext'

const CreateChannel = ({handleRecallChannels}) => {
    const { headers } = useContext(ClientContext)

    const channelNameRef = useRef()

    const [errorMessage, setErrorMessage] = useState(null)

    // Function to submit a post request for creating a new channel with user
    const createChannel = (e) => {
        e.preventDefault()
        setErrorMessage(null)
        const requestData = {
            name: channelNameRef.current.value,
            user_ids: []
        }
        postAPI(channelsBaseUrl, requestData, headers, channelCreateAuditText)
            .then(data => {
                data[2]
                ?
                setErrorMessage(data[2][0])
                :
                handleRecallChannels()
            })
        channelNameRef.current.value = null
    }

    return (
        <div className="CreateChannel modal">
            <form onSubmit={(e) => createChannel(e)}>
                <input type="text" ref={channelNameRef} placeholder="Channel Name"/>
                <button type="submit">+svg</button>
            </form>
            
            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
    )
}

export default CreateChannel
