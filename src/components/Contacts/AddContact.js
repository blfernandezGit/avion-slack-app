import { useState } from 'react'
import UserList from '../Users/UserList'
import { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext';

const AddContact = () => {
    const { setUserContacts } = useContext(ClientContext)

    // state for search bar
    const [searchQuery, setSearchQuery] = useState('')

    // function for adding user as contact
    const handleAddContact = (user_id, user_uid) => {
        setUserContacts(user_id, user_uid)
    }

    return (
        <div className="AddContact">
            {/* Search User form */}
            <form onSubmit={(e) => handleAddContact(e)}>
                <input type="text" placeholder="User Email" onChange={(e) =>setSearchQuery(e.target.value)}/> 
            </form>

            <UserList 
                onClick={handleAddContact}
                searchQuery={searchQuery}
            />
        </div>
    )
}

export default AddContact
