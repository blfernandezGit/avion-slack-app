const FormInput = ({type, placeholder, reference, inputName, inputLabel, search}) => {
    return (
        <>
        {!search && 
            <div className="relative m-1 flex flex-col">
                <label htmlFor={inputName} className="text-sm text-center text-white md:mt-2">{inputLabel}</label>
                <input className="bg-transparent text-center text-white md:w-80 md:m-2 border-b-2 border-white focus:outline-none focus:border-pink rounded-md" type={type} placeholder={placeholder} ref={reference}></input>
            </div>
        }
        {search &&
            <input className="bg-transparent border-2 border-white focus:border-pink focus:outline-none rounded-md text-center text-white w-full" type={type} placeholder={placeholder} ref={reference}></input>
        }
        </>
    )
}

export default FormInput

