import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from './constants'

/* Custom hook for using axios get for live messages - this is the version of the hook that can get live details from api*/
const useAxiosGetChannel = (url, headers, requestData, auditTrail) => {
    // States for data, loading and error
    const [fetchedData, setFetchedData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    // Set base url as recognized by axios
    axios.defaults.baseURL = baseUrl
    useEffect(() => {
        let isActive = true
        axios({
            // Axios needed parameters to fetch API
            url: url,
            data: requestData || {},
            headers: {...headers, 'Access-Control-Allow-Origin': '*'} || {}, 
            method: 'GET',
        })
        .then(response => {
            if(isActive){
                // Display action done via API in console
                console.log(auditTrail)
                return response?.data;
            }
        })
        .then(data => {
            if(isActive){
                // Loading set to false when response is retrieved
                setIsLoading(false)
                // Get response data
                setFetchedData(data?.data)
            }
        })
        .catch(error => {
            if(isActive) {
                // Loading set to false when response is retrieved
                setIsLoading(false)
                // set error message from error response
                setErrorMessage(error.response?.data?.errors[0])
            }
        })

        return () => { isActive = false };
        //eslint-disable-next-line
    },[fetchedData])

    // when api is called, these values can be retrieved
    return { fetchedData, isLoading, errorMessage}
}

export default useAxiosGetChannel;