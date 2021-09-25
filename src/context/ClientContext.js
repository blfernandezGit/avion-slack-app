import { createContext, useState, useEffect } from 'react';
import { LOCAL_STORAGE_KEY_1 } from '../helpers/constants'
import { v4 as uuid_v4 } from "uuid";
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

    const [recallChannels, setRecallChannels] = useState(null)

    // function that changes recallChannels state every call such that it can be added as a useEffect dependency in useAxiosGet call by ChannelList
    // basically a function to re-render Channel List whenever a new Channel is created locally
    // TODO: improve if possible - since currently just setting a state to a unique id - uuid_v4() so that API request is called every time the function is called
    const handleRecall = () => {
        setRecallChannels(uuid_v4())
    }
    
    return (
        <ClientContext.Provider value={{ fetchedData: response.fetchedData, headers: response.headers, isAuth: response.isAuth, setLoginDetails, recallChannels, handleRecall }}>
            { props.children }
        </ClientContext.Provider>
    )
}

export default ClientContextProvider