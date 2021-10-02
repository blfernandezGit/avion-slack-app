import MemberTable from './MemberTable'

const MemberList = ({details, users}) => {
    return (
        <div className=" flex flex-col items-center justify-center">
            <div className="text-sm">Channel Members:</div>

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