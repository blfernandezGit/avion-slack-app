import Users from './Users'

const UserTable = ({users, onClick, searchQuery}) => {
    return (
        <div className="UserTable">
                {/* Map users into a table*/}
                {users
                    .filter(user => user.uid.includes(searchQuery))
                    .map(user => {
                        return <Users 
                                    key={user.id} 
                                    user = {user}
                                    onClick={onClick}
                                />
                    })
                }
        </div>
    )
}

export default UserTable
