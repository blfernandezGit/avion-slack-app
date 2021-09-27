import useAxiosGet from '../../helpers/useAxiosGet'
import UserTable from './UserTable'
import { userListUrl, userListAuditText } from '../../helpers/constants'
import { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext';

const UserList = ({onClick, searchQuery}) => {
    const { headers } = useContext(ClientContext)
    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving list of users
    const {fetchedData: users, isLoading, errorMessage} = useAxiosGet(userListUrl, headers, null, userListAuditText)

    return (
        <div className="UserList">
            <strong>User List</strong> {/* temporary, may or may not be removed */}
            
            { isLoading && <p>Loading...</p> /* Displayed while API is being fetched */ } 
            
            {/* Table component that displays list of Users */}
            { users && 
                <UserTable 
                    users={users} 
                    onClick={onClick}
                    searchQuery={searchQuery} 
                /> 
            }
            
            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
    )
}

export default UserList
