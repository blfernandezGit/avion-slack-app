import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Members = ({member, users}) => {
    const [user, setUser] = useState('')
    useEffect(() => {
        if(users) {
            const userDetails = users.find(user => user.id === member.user_id)
            setUser(userDetails.uid)
        }
        //eslint-disable-next-line
    }, [users])
    return (
            <div className="h-8">
                <Link to={`/client/messages/${member.user_id}/${user}`}>
                    <div className=" hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-pink hover:via-pink hover:to-custom animate-gradient-x w-max">
                        {user}
                    </div>
                </Link>
            </div>
    )
}

export default Members
