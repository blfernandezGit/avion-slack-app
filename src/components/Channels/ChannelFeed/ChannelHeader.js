import ChannelDetails from './ChannelDetails'

const ChannelHeader = ({details, handleRecallMembers}) => {
    return (
        <div className="ChannelHeader sub-header">
            { details &&
                <>
                    <div className="ChannelName headerTitle">{details.name}</div>
                    <div className="channel-members-count">{details?.channel_members.length}</div>

                    {/*TODO: Create modal for this*/ }
                    <ChannelDetails 
                        details={details}
                        handleRecallMembers={handleRecallMembers}
                    />
                </>
            }
        </div>
    )
}

export default ChannelHeader
