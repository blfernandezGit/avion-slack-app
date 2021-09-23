import {useRef} from 'react'
import useFetch from '../../helpers/useFetch'
const URL = 'http://206.189.91.54//api/v1/auth/sign_in'
const METHOD = 'POST'

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const requestData = {
        email: emailRef.current.value,
        password: passwordRef.current.value
    }

    const {fetchedData, isLoading, error, fetchedHeaders} = useFetch(URL, METHOD, requestData)

    const handleLogin = (e) => {
        e.preventDefault();
        console.log()
    }

    return (
        <div>
            <form onSubmit="handleLogin">
                <input type="email" ref="emailRef">Email</input>
                <input type="password" ref="passwordRef">Password</input>
            </form>
        </div>
    )
}

export default Login
