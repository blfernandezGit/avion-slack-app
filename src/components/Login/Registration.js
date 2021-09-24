import { useState, useRef } from 'react'
import {postAPI} from '../../helpers/useAxiosPost'
import { registrationUrl, registerAuditText } from '../../helpers/constants'

const Registration = () => {
    // Input field references
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    // State for error message
    const [errorMessage, setErrorMessage] = useState(null)

    // Function to submit a post request for user registration
    const handleRegistration = (e) => {
        e.preventDefault();
        // data needed to fulfill API request
        const requestData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        // Call function from useAxiosPost.js - postAPI(url, requestData, headers, auditTrail)
        postAPI(registrationUrl, requestData, null, registerAuditText)
            .then(data => {
                // TODO: Think of a way where data will be displayed on user registration OR just remove this .then lines of code (lines 25 to 28)
                console.log(data)
            })
            .catch(error => {
                // Set error message from error response
                setErrorMessage(error)
            })
    }

    return (
        <div>
            {/* Registration Form */}
            <form onSubmit={(e) => handleRegistration(e)}>
                <input type="email" ref={emailRef} placeholder="Email"/>
                <input type="password" ref={passwordRef} placeholder="Password"/>
                <input type="password" ref={passwordConfirmationRef}/>
                <button type="submit">Register</button>
            </form>
            
            {/* Display error message if it exists */}
            { errorMessage &&  <div>{errorMessage}</div> }
        </div>
    )
}

export default Registration
