import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from './constants'

/* Custom hook for using axios get */
const useAxiosGet = (url, headers, requestData, auditTrail, checker) => {
    // States for data, loading and error
    const [fetchedData, setFetchedData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    // Set base url as recognized by axios
    axios.defaults.baseURL = baseUrl
    useEffect(() => {
        axios({
            // Axios needed parameters to fetch API
            url: url,
            data: requestData || {},
            headers: headers || {}, 
            method: 'GET'
        })
        .then(async response => {
            // Loading set to false when response is retrieved
            setIsLoading(false)
            // Get response data
            setFetchedData(await response.data?.data)
            // Display action done via API in console
            console.log(auditTrail)
        })
        .catch(error => {
            // set error message from error response
            setError(error.response?.data?.errors[0])
        })
        //eslint-disable-next-line
    }, [checker]) // checker used for re-requesting api every time the checker value changes

    // when api is called, these values can be retrieved
    return { fetchedData, isLoading, error}
}

export default useAxiosGet;