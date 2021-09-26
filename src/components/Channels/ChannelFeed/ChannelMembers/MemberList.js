import MemberTable from './MemberTable'

const MemberList = ({details}) => {
    return (
        <div className="MemberList">
            <strong>Channel Members</strong>

            {/* Table component that displays list of Members for Channel */}
            { details && <MemberTable members={details?.channel_members} />}

        </div>
    )
}

export default MemberList