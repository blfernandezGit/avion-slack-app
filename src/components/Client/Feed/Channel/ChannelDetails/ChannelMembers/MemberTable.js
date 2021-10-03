import Members from './Members'

const MemberTable = ({members, users}) => {
    console.log(members)
    return (
        <>
            {/* Map members into a table*/}
            {members.map(member => { return <Members key={member.id}  member = {member} users={users}/> })}
        </>
    )
}

export default MemberTable
