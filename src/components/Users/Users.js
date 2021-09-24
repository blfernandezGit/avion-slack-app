import React from 'react'

const Users = ({user}) => {
    return (
        <tr>
            {/* User details */}
            <td>{user.image}</td>
            <td>{user.uid}</td>
            <td>{user.name}</td>
        </tr>
    )
}

export default Users
