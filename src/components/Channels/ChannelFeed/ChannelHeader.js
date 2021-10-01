import ChannelDetails from './ChannelDetails'

const ChannelHeader = ({details, handleRecallMembers}) => {
    return (
        <div className="pt-10 w-screen bg-pink flex h-20 justify-center items-center">
            { details &&
                <>
                    <div className="w-1/2 ml-4 flex justify-start font-bold text-white text-lg">{details.name}</div>
                    <div className="flex w-1/2 justify-end mr-4 font-bold text-white text-lg">{details?.channel_members.length}</div>

                    {/*TODO: Create modal for this*/ }
                    {/* <ChannelDetails 
                        details={details}
                        handleRecallMembers={handleRecallMembers}
                    /> */}
                </>
            }
        </div>
    )
}

export default ChannelHeader
