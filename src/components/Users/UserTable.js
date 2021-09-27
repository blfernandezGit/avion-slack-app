import Users from './Users'

const UserTable = ({users, onClick, searchQuery}) => {
    console.log(searchQuery)
    return (
        // TODO: make list scrollable 
        <div className="UserTable">
                {/* Map users into a table*/}
                {users
                    .filter(user => searchQuery==='' || user.uid.includes(searchQuery))
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
