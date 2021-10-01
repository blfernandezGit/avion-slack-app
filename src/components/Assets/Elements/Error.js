const Error = ({errorMessage, errorLength}) => {
    return (
        <div className="h-6 mb-2 flex flex-col">
            { errorMessage && !errorLength && <div className='text-pink'>{errorMessage}</div> }
            { errorLength && errorMessage && errorMessage[0] && <div className='text-pink'>wut {errorMessage[0]}</div> }
            { errorLength && errorMessage && errorMessage[1] && <div className='text-pink'>{errorMessage[1]}</div> }
        </div>
    )
}

export default Error
