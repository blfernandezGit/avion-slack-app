import { useState, useRef } from 'react'
import {postAPI} from '../../helpers/useFetchPost'
const URL = 'auth/sign_in'

const Login = () => {
    const [fetchedData, setFetchedData] = useState(null)
    const [headers, setHeaders] = useState(null)
    const [error, setError] = useState(null)
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        const requestData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        postAPI(URL, requestData)
            .then(data => {
                setFetchedData(data[0])
                setHeaders(data[1])
                setError(null)
            })
            .catch(error => {
                setError(error)
                setHeaders(null)
                setFetchedData(null)
            })
    }

    return (
        <div>
            <form onSubmit={(e) => handleLogin(e)}>
                <input type="email" ref={emailRef} placeholder="Email"/>
                <input type="password" ref={passwordRef} placeholder="Password"/>
                <button type="submit">Login</button>
            </form>

            {fetchedData && 
                (
                    <>
                        <div>Logged In!</div>
                        <div>Email: {fetchedData.email}</div>
                        <div>Name: {fetchedData.name}</div>
                        <div>Image: {fetchedData.image}</div>
                    </>
                )
            }

            {headers && 
                (
                    <>
                        <div>access-token: {headers['access-token']}</div>
                        <div>Name: {headers.client}</div>
                        <div>Expiry: {headers.expiry}</div>
                        <div>uid: {headers.uid}</div>
                    </>
                )
            }

            {error && 
                (
                    <div>{error}</div>
                )
            }
            
        </div>
    )
}

export default Login
