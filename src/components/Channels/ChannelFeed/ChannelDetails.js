import ChannelInvite from './ChannelInvite'
import MemberList from './ChannelMembers/MemberList'

const ChannelDetails = ({details, handleRecallMembers}) => {
    return (
        <div className="ChannelDetails modal">
            {details &&
                <div>
                    <div>Channel Name: {details.name}</div>
                    <div>Channel Owner: {details.owner_id}</div> {/*TODO: get name from user details*/}
                    <MemberList 
                        details={details}
                    />
                    {/* TODO: move to a tab in modal? */}
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