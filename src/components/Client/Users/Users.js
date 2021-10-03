import React from 'react'

const Users = ({user, onClick}) => {
    return (
        <button onClick={() => {onClick(user.id, user.uid)} } className="w-full h-8 text-left">
            {user.uid}
        </button>
    )
}

export default Users
