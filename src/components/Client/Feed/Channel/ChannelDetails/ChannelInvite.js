import { useState, useContext } from 'react'
import {postAPI} from '../../../../../helpers/useAxiosPost'
import { channelAddUserUrl, inviteToChannelAuditText } from '../../../../../helpers/constants'
import { ClientContext } from '../../../../../context/ClientContext'
import UserList from '../../../Users/UserList'
import Error from '../../../../Assets/Elements/Error'

const ChannelInvite = ({details}) => {
    const { headers, handleRecall } = useContext(ClientContext)

    // State for search query
    const [searchQuery, setSearchQuery] = useState('')

    // State for error message
    const [ errorMessage, setErrorMessage ] = useState(null)
    const [ successMessage, setSuccessMessage ] = useState(null)

    // Function to submit a post request for creating a new channel with user
    const channelInvite = (user_id) => {
        setErrorMessage(null) // remove previously set error message
        // data needed to fulfill API request
        const requestData = {
            id: details.id,
            member_id: user_id
        }
        // Call function from useAxiosPost.js - postAPI(url, requestData, headers, auditTrail)
        // API for this function needs both body and headers
        postAPI(channelAddUserUrl, requestData, headers, inviteToChannelAuditText)
        .then( data => {
            if( data[ 2 ] ) {
                setErrorMessage(data[2])
            } else {
                // Calls function that has a side-effect of re-requesting the API to fetch Channel List
                handleRecall()
                setSuccessMessage('User successfully added')
            }
        })

    }

    return (
        <div className="bg-white flex flex-col flex-start h-full w-full z-10">
            {/* Search User form */}
            <form onSubmit={(e) => channelInvite(e)}>
                <input type="text" placeholder="Search User..." className="border-2 border-opacity-50 border-pink focus:border-pink focus:outline-none rounded-md w-full text-sm p-1" onChange={(e) =>setSearchQuery(e.target.value)}/> 
            </form>

            <UserList 
                onClick={channelInvite}
                searchQuery={searchQuery}
            />
            
            { errorMessage &&  <Error errorMessage={ errorMessage }/> }
            { successMessage && <Error errorMessage={ successMessage }/> }
        </div>
    )
}

export default ChannelInvite