import useAxiosGet from '../../../helpers/useAxiosGet'
import Users from './Users'
import { userListUrl, userListAuditText } from '../../../helpers/constants'
import { useContext } from 'react'
import { ClientContext } from '../../../context/ClientContext'
import Error from '../../Assets/Elements/Error'

const UserList = ({onClick, searchQuery, members, addContact}) => {
    const { headers, userDetails, currentUserContacts } = useContext(ClientContext)

    const {fetchedData: users, isLoading, errorMessage} = useAxiosGet(userListUrl, headers, null, userListAuditText)

    return (
        <>
        <div className="text-xs text-lightGrey w-full">Click on user to add</div>
        <div className="overflow-y-auto overscroll-none no-scrollbar w-full">
            { isLoading && <p>Loading...</p> } 
            
            { users && 
                users
                    .filter(user => user.uid !== userDetails.uid)
                    .filter(user => members ? !members.map(member => {return member.user_id}).includes(user.id) : user)
                    .filter(user => currentUserContacts ? currentUserContacts.length > 0 ? !currentUserContacts.map(contact => {return contact.id}).includes(user.id) : user : user)
                    .filter(user => searchQuery==='' || user.uid.includes(searchQuery))
                    .map(user => {
                        return <Users 
                                    key={user.id} 
                                    user = {user}
                                    onClick={onClick}
                                    addContact={addContact}
                                />
                    })
            }
            { errorMessage &&  <Error errorMessage={errorMessage}/> }
        </div>
        </>
    )
}

export default UserList
