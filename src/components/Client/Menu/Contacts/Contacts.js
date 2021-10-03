import { Link } from "react-router-dom"

const Contacts = ({contact}) => {
    return (
        <div className="w-full h-8">
            <Link to={`/client/messages/${contact.id}/${contact.uid}`}>
                {contact.uid}
            </Link>
        </div>
    )
}

export default Contacts
