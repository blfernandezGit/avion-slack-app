import axios from 'axios';

export const postAPI = (url, requestData) => {
    axios.defaults.baseURL = 'http://206.189.91.54//api/v1/'
    return axios({
        url: url,
        data: requestData || {}, 
        method: 'POST'
    })
    .then(response => {
        const data = [response.data?.data, response.headers]
        return Promise.resolve(data)
    })
    .catch(error => {
        const errorMessage = error?.response.data?.errors[0]
        return Promise.reject(errorMessage)
    })
}