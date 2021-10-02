import { useState } from 'react'
import ChannelDetails from '../Channel/ChannelDetails'
import ProfilePicture from '../../../Assets/ComponentSVG/ProfilePicture'

const FeedHeader = ({ uid, details, isLoading, handleRecallMembers }) => {
    const [ showChannelDetails, setShowChannelDetails ] = useState(false)

    return (
        <div className="relative w-full">
            <div className="fixed top-12 w-full bg-yellowishWhite flex flex-col min-h-12 max-h-screen justify-center items-center">
                <div className="h-12 flex flex-row w-full items-center">
                    <ProfilePicture/>
                    { details &&
                        <>
                            <div className="w-1/2 ml-4 flex justify-start text-pink text-lg" onClick={()=>{setShowChannelDetails(!showChannelDetails)}}>{details.name}</div>
                            <div className="flex w-1/2 justify-end mr-4 text-pink text-lg">{details?.channel_members.length}</div>
                        </>
                    }
                    { uid &&
                        <div className="w-1/2 ml-4 flex justify-start text-pink text-lg">{uid}</div>
                    }
                </div>
                { showChannelDetails && details &&
                    <div className="h-24">
                        <ChannelDetails 
                            details={details}
                            handleRecallMembers={handleRecallMembers}
                        /> 
                    </div>
                }
            </div>
        </div>
    )
}

export default FeedHeader
