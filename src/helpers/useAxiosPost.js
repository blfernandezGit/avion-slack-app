import axios from 'axios';
import { baseUrl } from './constants'

/* Reusable function for using axios post */
export const postAPI = (url, requestData, headers, auditTrail) => {
    // Set base url as recognized by axios
    axios.defaults.baseURL = baseUrl
    return axios({
        // Axios needed parameters to fetch API
        url: url,
        data: requestData || {},
        headers: headers || {},
        method: 'POST'
    })
    .then(response => {
        // create array that includes both response data and headers
        const data = [response.data?.data, response.headers]
        // Display action done via API in console
        console.log(auditTrail)
        // Passes data value to js that called it
        // used Promise.resolve since cannot use useState hook in a function
        return Promise.resolve(data)
    })
    .catch(error => {
        // create variable to store error message from error response
        const errorMessage = error.response?.data?.errors[0]
        // Passes error value to js that called it
        return Promise.reject(errorMessage)
    })
}
//used a separate function for POST since cannot call a custom hook within a function such as handleLogin in Login.js