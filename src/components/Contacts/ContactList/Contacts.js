import { Link } from "react-router-dom"
import { useContext } from 'react'
import { ClientContext } from '../../../context/ClientContext'

const Contacts = ({contact}) => {
    const { handleShowMenu } = useContext(ClientContext)
    return (
        <tr>
            {/* Contact details */}
            <td>
                <Link to={`/client/messages/${contact.id}/${contact.uid}`} onClick={(e)=>{handleShowMenu(e)}}>
                    {contact.uid}
                </Link>
            </td>
        </tr>
    )
}

export default Contacts
