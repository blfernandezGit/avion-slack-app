import useAxiosGet from '../../helpers/useAxiosGet'
import UserTable from './UserTable'
import { userListUrl, userListAuditText } from '../../helpers/constants'
import { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext';

const UserList = () => {
    const { headers } = useContext(ClientContext)
    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving list of users
    const {fetchedData: users, isLoading, errorMessage} = useAxiosGet(userListUrl, headers, null, userListAuditText)

    return (
        <div>
            <strong>User List</strong>
            { isLoading && <p>Loading...</p> }
            
            {/* Table component that displays list of Users */}
            { users && <UserTable users={users} /> }
            
            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
    )
}

export default UserList
