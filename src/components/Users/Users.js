import React from 'react'

const Users = ({user}) => {
    return (
        <tr>
            <td>{user.uid}</td>
            <td>{user.id}</td>
        </tr>
    )
}

export default Users
