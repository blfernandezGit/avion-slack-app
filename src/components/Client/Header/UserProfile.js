import { useContext } from 'react'
import { ClientContext } from '../../../context/ClientContext'

const UserProfile = () => {
    const { userDetails } = useContext(ClientContext)

    return (
        <div className="UserProfile modal">
            <table>
                <tbody>
                    <tr>
                        <td>{userDetails.image || 'img'}</td>
                        <td>{userDetails.name || 'Name Here'}</td>
                    </tr>
                    <tr>
                        <td>Nickname</td>
                        <td>{userDetails.nickname || 'Nickname Here'}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{userDetails.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserProfile
