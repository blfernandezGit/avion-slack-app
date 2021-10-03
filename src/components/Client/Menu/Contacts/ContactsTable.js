import Contacts from './Contacts'

const ContactsTable = ({currentUserContacts}) => {
    return (
        <>
            {currentUserContacts.map(contact => {
                return <Contacts key={contact.id}  contact = {contact}/>
            })}
        </>
    )
}

export default ContactsTable
