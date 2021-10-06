import { useState, useContext } from 'react'
import {postAPI} from '../../../../../helpers/useAxiosPost'
import { channelAddUserUrl, inviteToChannelAuditText } from '../../../../../helpers/constants'
import { ClientContext } from '../../../../../context/ClientContext'
import UserList from '../../../Users/UserList'
import Error from '../../../../Assets/Elements/Error'
import InviteUsers from './InviteUsers'

const ChannelInvite = ({details}) => {
    const { headers, handleRecall } = useContext(ClientContext)

    // State for search query
    const [searchQuery, setSearchQuery] = useState('')

    // State for error message
    const [ errorMessage, setErrorMessage ] = useState(null)
    const [ successMessage, setSuccessMessage ] = useState(null)
    const [ addedUsers, setAddedUsers ] = useState([])

    // Function to submit a post request for creating a new channel with user
    const channelInvite = (users) => {
        setErrorMessage(null) // remove previously set error message
        // data needed to fulfill API request
        const requestData = {
            id: details.id,
            member_id: users.map(user => user.id).join(',')
        }
        console.log(users.map(user => user.id).join(','))
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
                setAddedUsers([])
            }
        })
    }

    const addToList = (user_id, user_uid) => {
        console.log('added')
        const newAddedUser = {
            id: user_id,
            uid: user_uid
        }
        setAddedUsers(prevUsers => {
            return [...prevUsers, newAddedUser]
        })
    }

    console.log(addedUsers)

    const handleAddedUsers = (newList) => {
        setAddedUsers( newList )
    }

    return (
        <div className="bg-white flex flex-col flex-start h-full w-full z-10 px-2">
            {/* Search User form */}
            <form>
                <input type="text" placeholder="Search User..." className="border-2 border-opacity-50 border-pink focus:border-pink focus:outline-none rounded-t-md w-full text-sm px-1" onChange={(e) =>setSearchQuery(e.target.value)}/> 
            </form>

            <div className="h-2/6 flex flex-col flex-start w-full border-2 border-pink border-opacity-50">
                <UserList 
                    onClick={addToList}
                    searchQuery={searchQuery}
                    members = {details?.channel_members}
                    addedUsers = {addedUsers}
                />
            </div>

            <div className="h-2/6 flex flex-col flex-start w-full border-2 border-pink border-opacity-50">
                <div className="text-xs text-lightGrey w-full">Click on user to remove from add list</div>
                <div className="overflow-y-auto overscroll-none no-scrollbar w-full">
                    { addedUsers.length && addedUsers.map( ( user, index ) => {
                        return <InviteUsers
                                    user={user}
                                    key={index}
                                    index={index}
                                    addedUsers={addedUsers}
                                    handleAddedUsers={handleAddedUsers}
                                />
                    })}
                </div>
            </div>

            <button onClick={()=>{channelInvite(addedUsers)}}className="text-white bg-pink bg-opacity-50 hover:bg-opacity-75 border-2 border-pink border-opacity-50 rounded-b-md">
                Invite Users
            </button>
            
            { errorMessage &&  <Error errorMessage={ errorMessage }/> }
            { successMessage && <Error errorMessage={ successMessage }/> }
        </div>
    )
}

export default ChannelInvite