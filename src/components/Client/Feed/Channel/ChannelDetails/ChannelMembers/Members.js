import { useState, useEffect } from 'react'

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
        <tr>
            <td>{user}</td>
        </tr>
    )
}

export default Members
