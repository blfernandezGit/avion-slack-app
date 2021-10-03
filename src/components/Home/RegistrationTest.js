import React, {useState, useRef} from 'react'
import { postAPI } from '../../helpers/useAxiosPost'

const RegistrationTest = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const [errorMessage, setErrorMessage] = useState()
    const [showMessage, setShowMessage] = useState(false)

    
    const handleRegistration = (e) => {
        e.preventDefault()
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        postAPI(data).then((res) => {
            console.log(res)
            setErrorMessage('Registration Success!')
            setShowMessage(true)
        })
    }

    //ADD ERROR HANDLING HERE if-else statements. 

    
    return (
        <div>
            <div>{showMessage ? (errorMessage):<></>}</div>
        <input type="email" name="email" reference={emailRef} inputName="confirm_password" inputLabel="Confirm Password" />
        <input type="password" name="password" reference={passwordRef} inputName="confirm_password" inputLabel="Confirm Password"  />
        <input type="password" name="password" reference={passwordConfirmationRef} inputName="confirm_password" inputLabel="Confirm Password"/>
        <button type="submit" onSubmit={handleRegistration()}>Register</button>
        </div>
    )
}

export default RegistrationTest
