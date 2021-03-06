import { useState, useRef } from 'react'
import ChannelDetails from '../Channel/ChannelDetails/ChannelDetails'
import ProfilePicture from '../../../Assets/ComponentSVG/ProfilePicture'
import membersIcon from '../../../Assets/Images/members_1.png'

const FeedHeader = ({ uid, details }) => {
    const [ showChannelDetails, setShowChannelDetails ] = useState(false)

    const overlayRef = useRef()

    const handleShowChannelDetails = (e) => {
        if( e ) {
            if ( e?.target === overlayRef.current ) {
                setShowChannelDetails(!showChannelDetails)
            } 
        } else {
            setShowChannelDetails(!showChannelDetails)
        }
    }

    return (
            <div className="absolute top-0 w-full bg-yellowishWhite h-12 px-8 z-20">
                <div className="h-12 flex w-full items-center">
                    { details &&
                        <>
                            <button className="col-span-6 text-lg h-full w-full flex items-center" onClick={()=>{handleShowChannelDetails()}}>
                                <ProfilePicture/>
                                <div className="col-start-2 ml-4 text-pink">{details.name}</div>
                                <span className="text-xs ml-1 text-pink text-opacity-50">v</span>
                            </button>
                            <div className="col-start-12 mr-4 text-pink text-lg w-full flex justify-end">
                                <img src={membersIcon} alt="members" className="h-7"/>
                                <div className="text-right px-2">
                                    {details?.channel_members.length}
                                </div>
                            </div>
                        </>
                    }
                    { uid &&
                        <>
                            <ProfilePicture/>
                            <div className="w-1/2 ml-4 flex justify-start text-pink text-lg">{uid}</div>
                        </>
                    }
                </div>
                { showChannelDetails && details &&
                    <ChannelDetails 
                        details={details}
                        handleShowChannelDetails={handleShowChannelDetails}
                        ref={overlayRef}
                    /> 
                }
            </div>
    )
}

export default FeedHeader
