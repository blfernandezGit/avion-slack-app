import ContactsTable from './ContactsTable'
import { useContext } from 'react'
import { ClientContext } from '../../../context/ClientContext';

const ContactList = () => {
    const { currentUserContacts } = useContext(ClientContext)

    return (
        <div className="ContactList">
            <strong>Contact List</strong> {/* temporary, may or may not be removed */}
            
            {/* Table component that displays list of Contacts */}
            { currentUserContacts && 
                <ContactsTable 
                    currentUserContacts={currentUserContacts} 
                /> 
            }
            
        </div>
    )
}

export default ContactList
