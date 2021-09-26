import { createContext, useState, useEffect } from 'react';
import { LOCAL_STORAGE_KEY_1 } from '../helpers/constants'
export const ClientContext = createContext();

const ClientContextProvider = (props) => {
    // State to store response data and headers from login - initial value from local storage
    const [response, setResponse] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_1)) || false)
    
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
    };
    // On change of response, saves data and headers to local storage
    useEffect(() =>{
        localStorage.setItem(LOCAL_STORAGE_KEY_1, JSON.stringify(response))
    }, [response])
    
    return (
        <ClientContext.Provider value={{ userDetails: response.fetchedData, headers: response.headers, isAuth: response.isAuth, setLoginDetails }}>
            { props.children }
        </ClientContext.Provider>
    )
}

export default ClientContextProvider