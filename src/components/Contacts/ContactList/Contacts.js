import { Link } from "react-router-dom";

const Contacts = ({contact}) => {
    return (
        <tr>
            {/* Contact details */}
            <td>
                <Link to={`/client/messages/${contact.id}/${contact.uid}`}>
                    {contact.uid}
                </Link>
            </td>
        </tr>
    )
}

export default Contacts
