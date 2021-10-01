import React from 'react'

const FormButton = ({buttonName}) => {
    return (
        <button className="text-white m-2 mt-4 md:mt-6 md:mb-2 rounded-md h-8 w-28 bg-gradient-to-r from-pink via-pink to-white animate-gradient-x" >{buttonName}</button>
    )
}

export default FormButton
