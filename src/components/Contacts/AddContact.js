import { useState } from 'react'
import UserList from '../Users/UserList'
import { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext'

const AddContact = () => {
    const { setUserContacts, currentUserContacts } = useContext(ClientContext)

    // state for search bar
    const [searchQuery, setSearchQuery] = useState('')

    // state for error message
    const [errorMessage, setErrorMessage] = useState(null)

    // function for adding user as contact
    const handleAddContact = (user_id, user_uid) => {
        if(currentUserContacts) {
            const contact = currentUserContacts.find(user => user.id === user_id)
            if(!contact){
                setUserContacts(user_id, user_uid)
                setErrorMessage(null)
            }
            else{
                setErrorMessage('User is already in contacts list.')
            }
        }
        else {
            setUserContacts(user_id, user_uid)
        }
        
    }

    return (
        <div className="h-24 bg-white rounded-md my-2 flex justify-center flex-col items-center">
            {/* Search User form */}
            <form onSubmit={(e) => handleAddContact(e)}>
                <input type="text" placeholder="Search Users..." className="text-sm text-center" onChange={(e) =>setSearchQuery(e.target.value)}/> 
            </form>

            <UserList 
                onClick={handleAddContact}
                searchQuery={searchQuery}
            />

            {errorMessage && <div>{errorMessage}</div>}
        </div>
    )
}

export default AddContact
