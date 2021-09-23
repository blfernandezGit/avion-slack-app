import { useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (url, headers) => {
    const [fetchedData, setFetchedData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        axios.defaults.baseURL = 'http://206.189.91.54//api/v1/'
        axios({
            url: url,
            headers: headers || {}, 
            method: 'GET'
        })
        .then(async response => {
            setIsLoading(false)
            setFetchedData(await response.data?.data)
        })
        .catch(error => {
            setError(error);
        })
    // eslint-disable-next-line
    }, []);
    
    return { fetchedData, isLoading, error}
}

export default useFetch;