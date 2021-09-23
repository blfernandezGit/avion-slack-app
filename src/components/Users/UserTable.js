import Users from './Users'

const UserTable = ({users}) => {
    return (
        <table>
            <tbody>
                {users.map(user => {
                    return <Users key={user.id}  user = {user}/>
                })}
            </tbody>
        </table>
    )
}

export default UserTable
