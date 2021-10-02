import { useState, useRef } from 'react'
import { Link } from "react-router-dom"
import { postAPI } from '../../helpers/useAxiosPost'
import { loginUrl, loginAuditText } from '../../helpers/constants'
import { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext'
import FormButton from '../Assets/Elements/FormButton'
import FormInputs from '../Assets/Elements/FormInput'
import Form from '../Assets/Elements/Form'
import Error from '../Assets/Elements/Error'
import HalfContainer from '../Assets/Elements/HalfContainer'
import '../Assets/General.CSS'
import LogoBg from '../Assets/ComponentSVG/LogoBg'


const Login = () => {
    const { setLoginDetails, handleLoading } = useContext(ClientContext)

    // Input field references
    const emailRef = useRef()
    const passwordRef = useRef()

    // State for error message
    const [errorMessage, setErrorMessage] = useState(null)

    // Function to submit a post request for creating a user session
    const handleLogin = (e) => {
        e.preventDefault()
        setErrorMessage(null) // remove previously set error message
        // data needed to fulfill API request
        const requestData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        // Call function from useAxiosPost.js - postAPI(url, requestData, headers, auditTrail)
        postAPI(loginUrl, requestData, null, loginAuditText)
            .then(data => {
                // Change login details to response data
                handleLoading(true)
                setTimeout(() => {
                    setLoginDetails(data)
                    handleLoading(false)
                }, 3000)
                
            })
            .catch(error => {
                // Set error message from error response
                setErrorMessage(error)
                setTimeout(() =>{setErrorMessage(null)}, 3000)
            })
    }

    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-screen">
            <LogoBg/>
            <HalfContainer customBg="md:bg-dirtyWhite">
                <Form onSubmit={handleLogin}>
                    <FormInputs type="email" name="email" reference={emailRef} inputName="email" inputLabel="Email"/>
                    <FormInputs type="password" name="password" reference={passwordRef} inputName="password" inputLabel="Password"/>
                    <FormButton buttonName="Login"/>
                </Form>
                <Error errorMessage={errorMessage}/>
                <div className="flex text-sm">
                    <span className="text-white mr-1">No Account?</span>
                    <Link to={`/signup`} className="text-white hover:text-pink">
                        Sign up
                    </Link> 
                </div>
            </HalfContainer>
        </div>
    )
}

export default Login
