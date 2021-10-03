import Users from './Users'

const UserTable = ({users, onClick, searchQuery}) => {
    return (
        <>
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
