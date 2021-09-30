import React from 'react'

const FormInputs = ({type, placeholder, reference}) => {
    return (
        <input className="bg-white-400 bg-custom text-white mt-2 text-center w-100 border-2 border-pink focus:outline-none placeholder-gray-600 focus:placeholder-gray-400" type={type} placeholder={placeholder} ref={reference}></input>
    )
}

export default FormInputs
