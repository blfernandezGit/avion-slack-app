const Form = ({onSubmit, children}) => {
    return (
        <form onSubmit={(e) => onSubmit(e)} className="flex flex-col mt-10 items-center">
            {children}
        </form>
    )
}

export default Form