import { useState, useEffect, useContext } from 'react'
import ChannelInvite from './ChannelInvite'
import MemberList from './ChannelMembers/MemberList'
import useAxiosGet from '../../../../../helpers/useAxiosGet'
import { userListUrl, userListAuditText } from '../../../../../helpers/constants'
import { ClientContext } from '../../../../../context/ClientContext'

const ChannelDetails = ({ details }) => {
    const { headers, handleRecall } = useContext(ClientContext)
    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving list of users
    const {fetchedData: users, isLoading} = useAxiosGet(userListUrl, headers, null, userListAuditText)

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
        <> 
            {details &&
                <>
                    <div><span className="text-sm">Channel Owner: </span>{isLoading ? "Loading..." : owner}</div> {/*TODO: get name from user details*/}
                    <div className="flex justify-between">
                        <MemberList 
                            details={details}
                            users={users}
                            isLoading={isLoading}
                        />
                        <ChannelInvite 
                            details={details} 
                            handleRecallMembers={handleRecall}
                        />
                    </div>
                </>
            }
        </>
    )
}

export default ChannelDetails
