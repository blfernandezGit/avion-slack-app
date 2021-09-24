import { useState, useRef } from 'react'
import { postAPI } from '../../helpers/useAxiosPost'
import { loginUrl, loginAuditText } from '../../helpers/constants'

const Login = ({setLoginDetails}) => {
    // Input field references
    const emailRef = useRef();
    const passwordRef = useRef();

    // State for error message
    const [errorMessage, setErrorMessage] = useState(null)

    // Function to submit a post request for creating a user session
    const handleLogin = (e) => {
        e.preventDefault();
        // data needed to fulfill API request
        const requestData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        // Call function from useAxiosPost.js - postAPI(url, requestData, headers, auditTrail)
        postAPI(loginUrl, requestData, null, loginAuditText)
            .then(data => {
                // Change login details to response data
                setLoginDetails(data)
            })
            .catch(error => {
                // Set error message from error response
                setErrorMessage(error)
            })
    }

    return (
        <div>
            {/* Login Form */}
            <form onSubmit={(e) => handleLogin(e)}>
                <input type="email" ref={emailRef} placeholder="Email"/>
                <input type="password" ref={passwordRef} placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
            
            {/* Display error message if it exists */}
            { errorMessage &&  <div>{errorMessage}</div> }
                
        </div>
    )
}

export default Login
