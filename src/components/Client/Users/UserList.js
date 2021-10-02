import useAxiosGet from '../../../helpers/useAxiosGet'
import UserTable from './UserTable'
import { userListUrl, userListAuditText } from '../../../helpers/constants'
import { useContext } from 'react'
import { ClientContext } from '../../../context/ClientContext'

const UserList = ({onClick, searchQuery}) => {
    const { headers } = useContext(ClientContext)

    const {fetchedData: users, isLoading, errorMessage} = useAxiosGet(userListUrl, headers, null, userListAuditText)

    return (
        <>
        <div className="text-xs text-lightGrey">Click on user to add</div>
        <div className="overflow-y-auto overscroll-none no-scrollbar text-center w-full">
            { isLoading && <p>Loading...</p> } 
            
            { users && 
                <UserTable 
                    users={users} 
                    onClick={onClick}
                    searchQuery={searchQuery} 
                /> 
            }
            
            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
        </>
    )
}

export default UserList
