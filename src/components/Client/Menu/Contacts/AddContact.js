import { useState } from 'react'
import UserList from '../../Users/UserList'
import { useContext } from 'react'
import { ClientContext } from '../../../../context/ClientContext'
import Error from '../../../Assets/Elements/Error'

const AddContact = () => {
    const { setUserContacts, currentUserContacts } = useContext(ClientContext)

    // state for search bar
    const [searchQuery, setSearchQuery] = useState('')

    // state for error message
    const [errorMessage, setErrorMessage] = useState(null)
    const [ successMessage, setSuccessMessage] = useState(null)

    // function for adding user as contact
    const handleAddContact = (user_id, user_uid) => {
        if(currentUserContacts) {
            const contact = currentUserContacts.find(user => user.id === user_id)
            if(!contact){
                setUserContacts(user_id, user_uid)
                setSuccessMessage('User successfully added as contact')
                setErrorMessage(null)
            }
            else{
                setErrorMessage('User is already in contacts list.')
            }
        }
        else {
            setUserContacts(user_id, user_uid)
            setSuccessMessage('User successfully added as contact')
        }
        
    }

    return (
        <div className="h-48 bg-white rounded-md my-2 flex flex-col items-start justify-start px-6">
            {/* Search User form */}
            <form className="w-full" onSubmit={(e) => handleAddContact(e)}>
                <input type="text" placeholder="Search Users..." className="border-2 border-pink focus:border-pink border-opacity-25 focus:outline-none rounded-md text-sm w-full" onChange={(e) =>setSearchQuery(e.target.value)}/> 
            </form>

                <UserList 
                    onClick={handleAddContact}
                    searchQuery={searchQuery}
                />

            { successMessage &&  <Error errorMessage={successMessage}/> }
            
            { errorMessage &&  <Error errorMessage={errorMessage}/> }
        </div>
    )
}

export default AddContact
