import React from 'react'

const Users = ({user, onClick}) => {
    return (
        <div>
            <button onClick={() => {onClick(user.id)}}>
                {user.uid}
            </button>
        </div>
    )
}

export default Users
