import React, {useState, useRef} from 'react'
// import Button from '../components/Button'
import axios from 'axios';

const Register = () => {

const registerEmailRef = useRef(null);
const registerPasswordRef = useRef(null);
const registerConfirmPasswordRef = useRef(null);

const [message, setMessage] = useState();

    const onRegister = () => {

        axios({
            method: "POST",
            url: "https://slackapi.avionschool.com/api/v1/auth",
            data: {
                email: registerEmailRef.current.value,
                password: registerPasswordRef.current.value,
                password_confirmation: registerConfirmPasswordRef.current.value
            }
        })
        .then ((res) => {
            setMessage('Registration Successful!')
        })

    }
    return (

        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                onRegister();
                }}>

                <label>Register</label>
                <br />

                <label>Email:</label>
                <input type="email" name="register-email" id="register-email" ref={registerEmailRef}/>

                <label>Password:</label>
                <input type="password" name="register-name" id="register-name" ref={registerPasswordRef}/>

                <label>Confirm Password:</label>
                <input type="password" name="register-name" id="register-name" ref={registerConfirmPasswordRef} />

                <button text="Register" type="submit" />

            </form>

            {message}

        </div>
    )
}

export default Register
