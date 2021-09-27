import Members from './Members'

const MemberTable = ({members}) => {
    return (
        <table className="MemberTable">
            <tbody>
                {/* Map members into a table*/}
                {members.map(member => {
                    return <Members key={member.id}  member = {member}/>
                })}
            </tbody>
        </table>
    )
}

export default MemberTable