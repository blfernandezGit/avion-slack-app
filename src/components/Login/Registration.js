import { useState, useRef } from 'react'
import {postAPI} from '../../helpers/useFetchPost'

const URL = 'auth'

const Registration = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const [errorMessage, setErrorMessage] = useState(null)

    const handleRegistration = (e) => {
        e.preventDefault();
        const requestData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        postAPI(URL, requestData)
            .then(data => {
                console.log(data)
                // setLoginDetails(data)
            })
            .catch(error => {
                setErrorMessage(error)
            })
    }

    return (
        <div>
            <form onSubmit={(e) => handleRegistration(e)}>
                <input type="email" ref={emailRef} placeholder="Email"/>
                <input type="password" ref={passwordRef} placeholder="Password"/>
                <input type="password" ref={passwordConfirmationRef}/>
                <button type="submit">Register</button>
            </form>
            
            {errorMessage && 
                (
                    <div>{errorMessage}</div>
                )
            }
        </div>
    )
}

export default Registration
