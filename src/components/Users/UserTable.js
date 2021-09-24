import Users from './Users'

const UserTable = ({users}) => {
    return (
        <table>
            <tbody>
                {/* Map users into a table*/}
                {users.map(user => {
                    return <Users key={user.id}  user = {user}/>
                })}
            </tbody>
        </table>
    )
}

export default UserTable
