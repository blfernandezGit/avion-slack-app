import React from 'react'

const FormButton = ({buttonName}) => {
    return (
        <button className="bg-pink text-white m-2 rounded-full h-8 w-16 hover:text-purple-600" >{buttonName}</button>
    )
}

export default FormButton
