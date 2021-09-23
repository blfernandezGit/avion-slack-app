import axios from 'axios';

export const postAPI = (url, requestData) => {
    axios.defaults.baseURL = 'http://206.189.91.54//api/v1/'
    return axios({
        url: url,
        data: requestData || {}, 
        method: 'POST'
    })
    .then(async response => {
        const data = [await response.data?.data, await response.headers]
        return Promise.resolve(data)
    })
    .catch(error => {
        return Promise.reject(error);
    })
}