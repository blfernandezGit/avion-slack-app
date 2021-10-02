import { createContext, useState, useEffect } from 'react'
import { LOCAL_STORAGE_KEY_1, LOCAL_STORAGE_KEY_2} from '../helpers/constants'
import { v4 as uuid_v4 } from "uuid"
export const ClientContext = createContext()

const ClientContextProvider = ( props ) => {
    // State to store response data and headers from login - initial value from local storage
    const [ response, setResponse ] = useState( JSON.parse( localStorage.getItem( LOCAL_STORAGE_KEY_1 ) ) || false )
    const [ contacts, setContacts ] = useState( JSON.parse( localStorage.getItem( LOCAL_STORAGE_KEY_2 ) ) || [] )
    const [ currentUserContacts ,setCurrentUserContacts ] = useState()
    const [ showMenu, setShowMenu ] = useState( true )
    const [ showLoading, setShowLoading ] = useState( false )
    const [ recall, setRecall ] = useState() 

    // Set data on login and remove on logout
    const setLoginDetails = ( data ) => {
        if( data ) {
            setResponse({
                fetchedData: data[ 0 ],
                headers: data[ 1 ],
                isAuth: true
            })
        } else {
            setResponse({
                fetchedData: {},
                headers: {},
                isAuth: false
            })
            setShowMenu( true ) // no need if logout is is menu
        }
    }

    // On change of response, saves data and headers to local storage
    useEffect( () => {
        localStorage.setItem( LOCAL_STORAGE_KEY_1 , JSON.stringify( response ) )
        if( response?.isAuth ) { handleDisplayedContacts() }
        //eslint-disable-next-line
    }, [ response ])

    // function to save all previously logged in users' contacts even when they logout
    const setUserContacts = ( newContactId , newContactUid ) => {
        const userAcct = contacts.find( user => { return user.user_id === response?.fetchedData?.id } )
        if( userAcct )
        {
            let newContactList = userAcct.contacts.push({
                    id: newContactId,
                    uid: newContactUid
                }
            )
            setContacts( [ ...contacts ], userAcct.contacts === newContactList )
        } else {   
            let newUserContacts = {
                user_id: response?.fetchedData?.id,
                contacts: [{
                    id: newContactId,
                    uid: newContactUid
                }]
            }
            setContacts( prevUserContacts=> {
                return [ ...prevUserContacts, newUserContacts ]
            })
        }
    }

    // On add contact, saves data to local storage
    useEffect( () =>{
        localStorage.setItem( LOCAL_STORAGE_KEY_2, JSON.stringify( contacts ) )
        if( response?.isAuth ) { handleDisplayedContacts() }
        //eslint-disable-next-line 
    }, [ contacts ])

    // function to get saved user contacts
    const handleDisplayedContacts = () => {
        const userAcct = contacts.find( user => { return user.user_id === response?.fetchedData?.id })
        if( userAcct ) { setCurrentUserContacts( userAcct.contacts ) }
    }

    // function for showing/hiding menu
    const handleShowMenu = () => {
        setShowMenu( !showMenu )
    }

    // Loading screen
    const handleLoading = ( state ) => {
        setShowLoading( state )
    }

    const handleRecall = () => {
        setRecall( uuid_v4() )
    }

    return (
        <ClientContext.Provider value={{ 
            userDetails: response.fetchedData, 
            headers: response.headers, 
            isAuth: response.isAuth, 
            setLoginDetails, 
            setUserContacts, 
            currentUserContacts, 
            showMenu, 
            handleShowMenu, 
            showLoading,
            handleLoading,
            recall, 
            handleRecall
        }}>
            { props.children }
        </ClientContext.Provider>
    )
}

export default ClientContextProvider