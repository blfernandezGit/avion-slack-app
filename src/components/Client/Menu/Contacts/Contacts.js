import { useContext } from 'react'
import { ClientContext } from '../../../../context/ClientContext'
import { Link } from "react-router-dom"

const Contacts = ({contact}) => {
    const { handleShowMenu, handleDeleteContacts, currentUserContacts } = useContext(ClientContext)

    const handleDelete = () => {
        handleDeleteContacts(currentUserContacts.filter(prevContact => prevContact.id !== contact.id))
    }

    return (
        <div className="w-full h-8 grid grid-cols-12">
            <div className="col-span-11 h-full w-full" onClick={() => {handleShowMenu()}}>
                <Link to={`/client/messages/${contact.id}/${contact.uid}`}>
                    <div>{contact.uid}</div>
                </Link>
            </div>
            <button onClick={()=>handleDelete()} className="col-start-12 h-full text-pink text-opacity-50 hover:text-pink">x</button>
        </div>
    )
}

export default Contacts