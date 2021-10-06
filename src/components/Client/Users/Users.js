import React from 'react'
import { Link } from "react-router-dom"

const Users = ({user, onClick, addContact}) => {
    return (
        <button onClick={() => {onClick(user.id, user.uid)} } className="w-full h-8 text-left">
            {addContact ?
                <Link to={`/client/messages/${user.id}/${user.uid}`}>
                    <div className=" hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-pink hover:via-pink hover:to-custom animate-gradient-x w-max">
                        {user.uid}
                    </div>
                </Link>
                : 
                <div className="hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-pink hover:via-pink hover:to-custom animate-gradient-x w-max">
                    {user.uid}
                </div>
            }
        </button>
    )
}

export default Users
