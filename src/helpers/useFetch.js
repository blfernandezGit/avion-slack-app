import { useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (url, method, headers, requestData) => {
    const [fetchedData, setFetchedData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [fetchedHeaders, setFetchedHeaders] = useState(null)
    useEffect(() => {
        axios.defaults.baseURL = 'http://206.189.91.54//api/v1/'
        axios({
            url: url, 
            data: {},
            headers: headers || {}, 
            method: method
        })
        .then(async response => {
            setIsLoading(false)
            console.log(response.data?.data)
            response.headers && setFetchedHeaders(response.headers)
            console.log(response.headers)
            setFetchedData(await response.data?.data)
        })
        .catch(error => {
            setError(error);
        })
    // eslint-disable-next-line
    }, []);
    
    return { fetchedData, isLoading, error, fetchedHeaders}
}

export default useFetch;

//'http://206.189.91.54//api/v1/users'
//'http://206.189.91.54//api/v1/messages?receiver_id={Reciever-ID}&receiver_class={User || Channel}'
//'http://206.189.91.54//api/v1/channels'
//'http://206.189.91.54//api/v1/channels/{channel.id}'