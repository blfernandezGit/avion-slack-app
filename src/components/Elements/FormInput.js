const FormInput = ({type, placeholder, reference, inputName, inputLabel}) => {
    return (
        <div className="relative m-1 flex flex-col">
            <label htmlFor={inputName} className="text-sm text-center text-white">{inputLabel}</label>
            <input className="bg-transparent text-center text-white w-100 border-b-2 border-white focus:outline-none focus:border-pink rounded-md" type={type} placeholder={placeholder} ref={reference}></input>
        </div>
    )
}

export default FormInput

