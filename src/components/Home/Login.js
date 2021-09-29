import { useState, useRef } from 'react'
import { useHistory, Link } from "react-router-dom"
import { postAPI } from '../../helpers/useAxiosPost'
import { loginUrl, loginAuditText } from '../../helpers/constants'
import { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext'
import FormButton from '../Elements/FormButton'
import FormInputs from '../Elements/FormInputs'
import Forms from '../Elements/Forms'
import img1 from  '../Images/Kaizen.png'
import '../Assets/General.CSS'


const Login = () => {
    const { setLoginDetails } = useContext(ClientContext)
    // get current url path
    const history = useHistory()

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
                setLoginDetails(data)
                history.push("/client")
            })
            .catch(error => {
                // Set error message from error response
                setErrorMessage(error)
            })
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="">
            <img src={img1} alt="" />
            </div>
            {/* Login Form */}
            <form onSubmit={handleLogin} className="flex flex-col mt-10 items-center">
                <FormInputs type="email" reference={emailRef} placeholder="Email"/>
                <FormInputs type="password" reference={passwordRef} placeholder="Password"/>
                <FormButton buttonName="Login"/>
                <p className="text-center text-white">No Account?</p>
                <Link to={`/signup`} className="text-center md text-white hover:text-pink">
                    Sign up
                </Link> 
            </form>
            
            {/* Display error message if it exists */}
            { errorMessage &&  <div className='text-pink'>{errorMessage}</div> }

            
        </div>
    )
}

export default Login
