import ContactsTable from './ContactsTable'
import { useContext } from 'react'
import { ClientContext } from '../../../context/ClientContext'

const ContactList = () => {
    const { currentUserContacts } = useContext(ClientContext)

    return (
        <div className="max-h-60 overflow-auto">
            <strong>Contact List</strong> {/* temporary, may or may not be removed */}
            
            {/* Table component that displays list of Contacts */}
            { currentUserContacts ?
                <ContactsTable 
                    currentUserContacts={currentUserContacts} 
                /> 
                :
                <div>No available contacts.</div>
            }
            
        </div>
    )
}

export default ContactList
