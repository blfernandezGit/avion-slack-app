import { useContext } from 'react'
import { ClientContext } from '../../../../context/ClientContext'
import { Link } from "react-router-dom"

const Contacts = ({contact}) => {
    const { handleShowMenu } = useContext(ClientContext)
    return (
        <div className="w-full h-8" onClick={() => {handleShowMenu()}}>
            <Link to={`/client/messages/${contact.id}/${contact.uid}`}>
                <div>{contact.uid}</div>
            </Link>
        </div>
    )
}

export default Contacts