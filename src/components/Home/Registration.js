import { useState, useRef } from 'react'
import { Link, Redirect } from "react-router-dom";
import {postAPI} from '../../helpers/useAxiosPost'
import { registrationUrl, registerAuditText } from '../../helpers/constants'

const Registration = () => {
    // Input field references
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    // State for error message
    const [errorMessage, setErrorMessage] = useState(null)

    // State for successful registration - to handle redirect
    const [redirectToSignIn, setRedirectToSignIn] = useState(false);

    // Function to submit a post request for user registration
    const handleRegistration = (e) => {
        e.preventDefault();
        setErrorMessage(null) // remove previously set error message
        // data needed to fulfill API request
        const requestData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        // Call function from useAxiosPost.js - postAPI(url, requestData, headers, auditTrail)
        postAPI(registrationUrl, requestData, null, registerAuditText)
            .then(data => {
                setRedirectToSignIn(true)
            })
            .catch(error => {
                const errorArray = error?.full_messages
                // Set error message from error response
                setErrorMessage(errorArray)
            })
    }

    if(redirectToSignIn){
        return (<Redirect to='/'/>) //redirect to sign in page on successful registration
    }
    return (
        <div className="Registration">
            <form onSubmit={(e) => handleRegistration(e)}>
                <input type="email" ref={emailRef} placeholder="Email"/>
                <input type="password" ref={passwordRef} placeholder="Password"/>
                <input type="password" ref={passwordConfirmationRef}/>
                <button type="submit">Register</button>
            </form>
            
            {/* Display error message if it exists - specific for Registration API */}
            { errorMessage && 
                <>
                    <div>{errorMessage[0]}</div>
                    <div>{errorMessage[1]}</div>
                </>
            }

            <div>
                <Link to={`/`}>
                    Sign in
                </Link>
            </div>
        </div>
    )
}

export default Registration
