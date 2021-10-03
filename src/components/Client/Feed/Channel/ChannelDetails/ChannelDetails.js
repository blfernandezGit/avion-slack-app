import { useState, useEffect, useContext } from 'react'
import ChannelInvite from './ChannelInvite'
import MemberList from './ChannelMembers/MemberList'
import useAxiosGet from '../../../../../helpers/useAxiosGet'
import { userListUrl, userListAuditText } from '../../../../../helpers/constants'
import { ClientContext } from '../../../../../context/ClientContext'

const ChannelDetails = ({ details }) => {
    console.log(details)
    const { headers, handleRecall } = useContext(ClientContext)
    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving list of users
    const {fetchedData: users, isLoading} = useAxiosGet(userListUrl, headers, null, userListAuditText)

    const [ owner, setOwner ] = useState('')
    const [ zIndex, setZIndex ] = useState( 'z-20' )

    const date = new Date(details.created_at).toLocaleDateString([], {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    useEffect(() => {
        if(users) {
            const ownerDetails = users.find(user => user.id === details.owner_id)
            setOwner(ownerDetails.uid)
            console.log(users)
        }
        //eslint-disable-next-line
    }, [users])

    const handleChangeTab = ( val ) => {
        if( val === "add" ) {
            setZIndex( 'z-0' )
            console.log('z-0')
        } else {
            setZIndex( 'z-20' )
        }
    }

    return (
        <div className="Overlay absolute w-full left-0 h-dhn-vh flex justify-center items-center"> 
            {details &&
                <div className = "Modal bg-yellowishWhite h-5/6 lg:h-4/6 p-6 rounded-md w-5/6 lg:w-1/2 grid grid-rows-12 grid-cols-12">
                    <div className="text-xl font-semibold col-span-full row-span-1">{details.name}</div>
                    <div className="bg-white flex flex-col justify-center px-6 rounded-t-md col-span-full row-span-2">
                        <div className="text-sm">Created by </div>
                        <div>{isLoading ? "Loading..." : `${owner} on ${date}`}</div>
                    </div>
                    <div className="col-span-full grid grid-cols-12 grid-rows-12 row-start-4 row-end-12">
                        <button onClick={() => handleChangeTab('member')} className="col-span-3 flex justify-center items-end row-span-1 text-sm">Members</button>
                        <button onClick={() =>handleChangeTab('add')} className="col-span-4 flex justify-center items-end row-span-1 text-xs">Add Members</button>
                        <MemberList
                            details={details}
                            users={users}
                            isLoading={isLoading}
                            zIndex={zIndex}
                        />
                        <div className="col-span-full row-start-2 row-end-13 bg-white rounded-md flex justify-center flex-col p-4">
                            <ChannelInvite 
                                details={details} 
                                handleRecallMembers={handleRecall}
                            />
                        </div>
                    </div>
                    <div className="text-xs col-span-full row-span-1 flex items-end">Channel ID: {details.id}</div>
                </div>
            }
        </div>
    )
}

export default ChannelDetails
