import axios from 'axios'
import { baseUrl } from './constants'

/* Reusable function for using axios post */
export const postAPI = (url, requestData, headers, auditTrail) => {
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
        const data = [response.data?.data, response.headers, response.data?.errors]
        // Display action done via API in console
        console.log(auditTrail)
        // Passes data value to js that called it
        // used Promise.resolve since cannot use useState hook in a function
        return Promise.resolve(data)
    })
    .catch(error => {
        // create variable to store error message from error response
        const errorMessages = error.response?.data?.errors
        // FIXME: cannot catch error in channel creation - instead passes through .then response
        // Passes error value to js that called it
        return Promise.reject(errorMessages)
    })
}
//used a separate function for POST since cannot call a custom hook within a function such as handleLogin in Login.js