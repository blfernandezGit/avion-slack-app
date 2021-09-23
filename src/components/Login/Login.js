import { useState, useRef } from 'react'
import {postAPI} from '../../helpers/useFetchPost'
const URL = 'auth/sign_in'

const Login = ({setLoginDetails}) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [errorMessage, setErrorMessage] = useState(null)

    const handleLogin = (e) => {
        e.preventDefault();
        const requestData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        postAPI(URL, requestData)
            .then(data => {
                setLoginDetails(data)
            })
            .catch(error => {
                setErrorMessage(error)
            })
    }

    return (
        <div>
            <form onSubmit={(e) => handleLogin(e)}>
                <input type="email" ref={emailRef} placeholder="Email"/>
                <input type="password" ref={passwordRef} placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
            
            {errorMessage && 
                (
                    <div>{errorMessage}</div>
                )
            }
        </div>
    )
}

export default Login
