import MemberTable from './MemberTable'

const MemberList = ({details, users}) => {
    return (
        <div className="MemberList">
            <strong>Channel Members</strong>

            {/* Table component that displays list of Members for Channel */}
            { details && 
                <MemberTable 
                    members={details?.channel_members} 
                    users={users}
                />
            }

        </div>
    )
}

export default MemberList