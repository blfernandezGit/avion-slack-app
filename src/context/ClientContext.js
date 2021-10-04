import { createContext, useState, useEffect } from 'react'
import { LOCAL_STORAGE_KEY_1, LOCAL_STORAGE_KEY_2} from '../helpers/constants'
import { v4 as uuid_v4 } from "uuid"
export const ClientContext = createContext()

const ClientContextProvider = ( props ) => {
    // State to store response data and headers from login - initial value from local storage
    const [ response, setResponse ] = useState( JSON.parse( localStorage.getItem( LOCAL_STORAGE_KEY_1 ) ) || false )
    const [ contacts, setContacts ] = useState( JSON.parse( localStorage.getItem( LOCAL_STORAGE_KEY_2 ) ) || [] )
    const [ currentUserContacts, setCurrentUserContacts ] = useState(null)
    const [ showMenu, setShowMenu ] = useState( true )
    const [ showWelcome, setShowWelcome ] = useState( true )
    const [ showLoading, setShowLoading ] = useState( false )
    const [ recall, setRecall ] = useState() 
    const [ focusClass, setFocusClass ] = useState('border-opacity-25')
    const [ textFocusClass, setTextFocusClass ] = useState('text-opacity-25')

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
        else { setCurrentUserContacts(null) }
    }

    // function for showing/hiding menu
    const handleShowMenu = (val) => {
        console.log(val)
        if( !val ) {
            setShowMenu( !showMenu )
        }
    }

    // Loading screen
    const handleLoading = ( state ) => {
        setShowLoading( state )
    }

    // random number to recall axios
    const handleRecall = () => {
        setRecall( uuid_v4() )
    }

    // function to include button in focus change
    const handleFocusChatBox = (val) => {
        if(val) {
            setFocusClass('')
            setTextFocusClass('')
        }
        else {
            setFocusClass('border-opacity-25')
            setTextFocusClass('text-opacity-25')
        }
    }

    const handleShowWelcome = (val) => {
        setShowWelcome(val)
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
            handleRecall,
            handleFocusChatBox,
            focusClass,
            textFocusClass,
            handleShowWelcome,
            showWelcome
        }}>
            { props.children }
        </ClientContext.Provider>
    )
}

export default ClientContextProvider