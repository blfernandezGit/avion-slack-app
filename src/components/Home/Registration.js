import { useState, useRef } from 'react'
import { Link, Redirect } from "react-router-dom"
import {postAPI} from '../../helpers/useAxiosPost'
import { registrationUrl, registerAuditText } from '../../helpers/constants'
import Error from '../Assets/Elements/Error'
import LogoBg from '../Assets/ComponentSVG/LogoBg'
import HalfContainer from '../Assets/Elements/HalfContainer'
import Form from '../Assets/Elements/Form'
import FormInput from '../Assets/Elements/FormInput'
import FormButton from '../Assets/Elements/FormButton'

const Registration = () => {
    // Input field references
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()

    // State for error message
    const [errorMessage, setErrorMessage] = useState(null)

    // State for successful registration - to handle redirect
    const [redirectToSignIn, setRedirectToSignIn] = useState(false)

    // Function to submit a post request for user registration
    const handleRegistration = (e) => {
        e.preventDefault()
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
                setTimeout(() =>{setErrorMessage(null)}, 3000)
            })
    }

    if(redirectToSignIn){
        return (<Redirect to='/'/>) //redirect to sign in page on successful registration
    }
    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-screen">
            <LogoBg/>
            <HalfContainer customBg="md:bg-dirtyWhite">
                <Form onSubmit={handleRegistration}>
                    <FormInput type="email" name="email" reference={emailRef} inputName="email" inputLabel="Email"/>
                    <FormInput type="password" name="password" reference={passwordRef} inputName="password" inputLabel="Password"/>
                    <FormInput type="password" name="password" reference={passwordConfirmationRef} inputName="confirm_password" inputLabel="Confirm Password"/>
                    <FormButton buttonName="Register"/>
                </Form>
                <Error errorMessage={errorMessage}/>
                <div className="flex text-sm">
                    <span className="text-white mr-1">Already Registered?</span>
                    <Link to={`/`} className="text-white hover:text-pink">
                        Sign in
                    </Link> 
                </div>
            </HalfContainer>
        </div>
    )
}

export default Registration
