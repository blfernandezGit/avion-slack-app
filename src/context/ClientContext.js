import { createContext, useState, useEffect } from 'react'
import { LOCAL_STORAGE_KEY_1, LOCAL_STORAGE_KEY_2} from '../helpers/constants'
export const ClientContext = createContext()

const ClientContextProvider = (props) => {
    // State to store response data and headers from login - initial value from local storage
    const [response, setResponse] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_1)) || false)
    const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_2)) || [])
    const [currentUserContacts ,setCurrentUserContacts] = useState()

    // Set data on login and remove on logout
    const setLoginDetails = (data) => {
        data ?
        setResponse({
            fetchedData: data[0], //response body
            headers: data[1], // response headers
            isAuth: true
        })
        :
        setResponse({
            fetchedData: {},
            headers: {},
            isAuth: false
        })
    }

    // On change of response, saves data and headers to local storage
    useEffect(() =>{
        localStorage.setItem(LOCAL_STORAGE_KEY_1, JSON.stringify(response))
        if(response?.isAuth) {handleDisplayedContacts()}
        //eslint-disable-next-line
    }, [response])

    // function to save all previously logged in users' contacts even when they logout
    const setUserContacts = (newContactId, newContactUid) => {
        const userAcct = contacts.find(user => {return user.user_id === response?.fetchedData?.id})
        if(userAcct)
        {
            let newContactList = userAcct.contacts.push({
                    id: newContactId,
                    uid: newContactUid
                }
            )
            setContacts([...contacts], userAcct.contacts === newContactList)
        }
        else {   
            let newUserContacts = {
                user_id: response?.fetchedData?.id,
                contacts: [{
                    id: newContactId,
                    uid: newContactUid
                }]
            }
            setContacts(prevUserContacts=> {
                return [...prevUserContacts, newUserContacts]
            })
        }
    }

    // On add contact, saves data to local storage
    useEffect(() =>{
        localStorage.setItem(LOCAL_STORAGE_KEY_2, JSON.stringify(contacts))
        if(response?.isAuth) {handleDisplayedContacts()}
        //eslint-disable-next-line 
    },[contacts])

    // function to get saved user contacts
    const handleDisplayedContacts = () => {
        const userAcct = contacts.find(user => {return user.user_id === response?.fetchedData?.id})
        if(userAcct) {setCurrentUserContacts(userAcct.contacts)}
    }

    // function for showing/hiding menu
    const [showMenu, setShowMenu] = useState(true)

    const handleShowMenu = (e) => {
        e.preventDefault()
        setShowMenu(!showMenu)
    }

    return (
        <ClientContext.Provider value={{ userDetails: response.fetchedData, headers: response.headers, isAuth: response.isAuth, setLoginDetails, setUserContacts, currentUserContacts, showMenu, handleShowMenu }}>
            { props.children }
        </ClientContext.Provider>
    )
}

export default ClientContextProvider