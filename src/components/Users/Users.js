import React from 'react'

const Users = ({user}) => {
    return (
        <tr>
            <td>{user.image}</td>
            <td>{user.uid}</td>
            <td>{user.name}</td>
        </tr>
    )
}

export default Users
