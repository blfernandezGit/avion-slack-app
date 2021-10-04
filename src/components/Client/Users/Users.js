import React from 'react'
import { Link } from "react-router-dom"

const Users = ({user, onClick, addContact}) => {
    return (
        <button onClick={() => {onClick(user.id, user.uid)} } className="w-full h-8 text-left">
            {addContact ?
                <Link to={`/client/messages/${user.id}/${user.uid}`}>
                    {user.uid}
                </Link>
                : user.uid
            }

        </button>
    )
}

export default Users
