const HalfContainer = ({children, customBg}) => {
    return (
        <div className={`w-full h-1/2 flex flex-col justify-center items-center md:w-1/2 md:h-full relative ${customBg}`}>
            {children}
        </div>
    )
}

export default HalfContainer
