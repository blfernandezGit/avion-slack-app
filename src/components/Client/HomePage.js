import { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext'
import HomeContacts from "./HomeContacts"


const HomePage = () => {
    const { currentUserContacts } = useContext(ClientContext)
    return (
        <div className={`HomePage fixed h-header-negative hidden md:w-1/2 lg:w-1/4 bg-bg1 z-10 bg-no-repeat bg-center bg-cover no-scrollbar overflow-y-auto overscroll-none md:flex md:flex-col items-center`}>
            { currentUserContacts ?
                <>
                    <div className="text-pink text-lg py-4"> Recent Messages</div>
                    {currentUserContacts.map(contact => <HomeContacts key={contact.id} contact={contact}/>)} 
                </>
                :
                <div className="text-pink h-full w-full grid place-items-center text-lg">No recent contacts</div>
            }
        </div>
    )
}

export default HomePage
