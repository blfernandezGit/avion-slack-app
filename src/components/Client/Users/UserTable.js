import Users from './Users'

const UserTable = ({users, onClick, searchQuery}) => {
    return (
        // TODO: make list scrollable 
        <>
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
        </>
    )
}

export default UserTable
