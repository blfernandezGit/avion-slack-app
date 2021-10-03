import { useState, useRef, useContext } from 'react'
import {postAPI} from '../../../../helpers/useAxiosPost'
import { channelsBaseUrl, channelCreateAuditText } from '../../../../helpers/constants'
import { ClientContext } from '../../../../context/ClientContext'
import Error from '../../../Assets/Elements/Error'

const CreateChannel = ({handleRecallChannels}) => {
    const { headers } = useContext(ClientContext)

    const channelNameRef = useRef()

    const [errorMessage, setErrorMessage] = useState(null)
    const [ successMessage, setSuccessMessage] = useState(null)

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
                if( data[ 2 ] ) {
                    setErrorMessage( data[ 2 ][ 0 ] )
                } else {
                    handleRecallChannels()
                    setSuccessMessage('Channel successfully created')
                }
            })
        channelNameRef.current.value = null
    }

    return (
        <>
            <form className="grid grid-cols-12 w-full" onSubmit={(e) => createChannel(e)}>
                <input className="border-2 border-pink col-span-11 focus:border-pink border-opacity-25 focus:outline-none rounded-md" type="text" ref={channelNameRef} placeholder="Channel Name"/>
                <button className="col-span-1" type="submit">+svg</button>
            </form>
            { successMessage &&  <Error errorMessage={successMessage}/> }
            
            { errorMessage &&  <Error errorMessage={errorMessage}/> }
        </>
    )
}

export default CreateChannel
