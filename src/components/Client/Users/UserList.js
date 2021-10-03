import useAxiosGet from '../../../helpers/useAxiosGet'
import Users from './Users'
import { userListUrl, userListAuditText } from '../../../helpers/constants'
import { useContext } from 'react'
import { ClientContext } from '../../../context/ClientContext'
import Error from '../../Assets/Elements/Error'

const UserList = ({onClick, searchQuery}) => {
    const { headers } = useContext(ClientContext)

    const {fetchedData: users, isLoading, errorMessage} = useAxiosGet(userListUrl, headers, null, userListAuditText)

    return (
        <>
        <div className="text-xs text-lightGrey w-full">Click on user to add</div>
        <div className="overflow-y-auto overscroll-none no-scrollbar w-full">
            { isLoading && <p>Loading...</p> } 
            
            { users && 
                users
                    .filter(user => searchQuery==='' || user.uid.includes(searchQuery))
                    .map(user => {
                        return <Users 
                                    key={user.id} 
                                    user = {user}
                                    onClick={onClick}
                                />
                    })
            }
            { errorMessage &&  <Error errorMessage={errorMessage}/> }
        </div>
        </>
    )
}

export default UserList
