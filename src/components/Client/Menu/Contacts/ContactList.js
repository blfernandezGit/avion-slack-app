import Contacts from './Contacts'
import { useContext } from 'react'
import { ClientContext } from '../../../../context/ClientContext'

const ContactList = () => {
    const { currentUserContacts } = useContext(ClientContext)

    return (
        <>
            { currentUserContacts ?
                currentUserContacts.map(contact => {
                    return <Contacts key={contact.id}  
                            contact = {contact}
                            />
                }) 
                :
                <div>No available contacts.</div>

            }
            
        </>
    )
}

export default ContactList
