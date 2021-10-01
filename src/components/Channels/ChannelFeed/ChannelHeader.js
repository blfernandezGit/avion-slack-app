import ChannelDetails from './ChannelDetails'
import ProfilePicture from '../../Assets/ProfilePicture'

const ChannelHeader = ({details, handleRecallMembers}) => {
    return (
        <div className="relative w-full">
            <div className="fixed top-12 w-full bg-yellowishWhite flex h-12 justify-center items-center">
                <ProfilePicture/>
                { details &&
                    <>
                        <div className="w-1/2 ml-4 flex justify-start text-pink text-lg">{details.name}</div>
                        <div className="flex w-1/2 justify-end mr-4 text-pink text-lg">{details?.channel_members.length}</div>

                        {/*TODO: Create modal for this*/ }
                        {/* <ChannelDetails 
                            details={details}
                            handleRecallMembers={handleRecallMembers}
                        /> */}
                    </>
                }
            </div>
        </div>
    )
}

export default ChannelHeader
