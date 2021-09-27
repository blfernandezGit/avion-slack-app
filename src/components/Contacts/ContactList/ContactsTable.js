import Contacts from './Contacts'

const ContactsTable = ({currentUserContacts}) => {
    return (
        <table className="ContactsTable">
            <tbody>
                {/* Map channels into a table*/}
                {currentUserContacts.map(contact => {
                    return <Contacts key={contact.id}  contact = {contact}/>
                })}
            </tbody>
        </table>
    )
}

export default ContactsTable
