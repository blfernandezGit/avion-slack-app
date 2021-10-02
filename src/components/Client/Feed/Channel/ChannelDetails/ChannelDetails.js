import { useState, useEffect, useContext } from 'react'
import ChannelInvite from './ChannelInvite'
import MemberList from './ChannelMembers/MemberList'
import useAxiosGet from '../../../../../helpers/useAxiosGet'
import { userListUrl, userListAuditText } from '../../../../../helpers/constants'
import { ClientContext } from '../../../../../context/ClientContext'

const ChannelDetails = ({details, handleRecallMembers}) => {
    const { headers } = useContext(ClientContext)
    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving list of users
    const {fetchedData: users} = useAxiosGet(userListUrl, headers, null, userListAuditText)

    const [owner, setOwner] = useState('')

    useEffect(() => {
        if(users) {
            const ownerDetails = users.find(user => user.id === details.owner_id)
            setOwner(ownerDetails.uid)
            console.log(users)
        }
        //eslint-disable-next-line
    }, [users])

    return (
        <div className="text-center flex flex-col items-center justify-center bg-yellowishWhite h-24 p-36"> 
            {details &&
                <div>
                    <div><span className="text-sm">Channel Owner: </span>{owner}</div> {/*TODO: get name from user details*/}
                    <MemberList 
                        details={details}
                        users={users}
                    />
                    <ChannelInvite 
                        details={details} 
                        handleRecallMembers={handleRecallMembers}
                    />
                </div>
            }
        </div>
    )
}

export default ChannelDetails
