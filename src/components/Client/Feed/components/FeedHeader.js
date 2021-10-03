import { useState, useRef } from 'react'
import ChannelDetails from '../Channel/ChannelDetails/ChannelDetails'
import ProfilePicture from '../../../Assets/ComponentSVG/ProfilePicture'

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
            <div className="absolute top-0 w-full bg-yellowishWhite h-12 px-6 z-20">
                <div className="h-12 flex flex-row w-full items-center">
                    { details &&
                        <>
                            <button className="w-1/2 flex justify-start text-pink text-lg" onClick={()=>{handleShowChannelDetails()}}>
                                <ProfilePicture/>
                                <div className="ml-4">{details.name}</div>
                                <span className="text-sm">svg</span>
                            </button>
                            <div className="flex w-1/2 justify-end mr-4 text-pink text-lg">{details?.channel_members.length}</div>
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
