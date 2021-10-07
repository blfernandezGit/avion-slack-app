import { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../../context/ClientContext'

const Welcome = () => {
    const { userDetails } = useContext(ClientContext)
    const [ dateState, setDateState ] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval( () => setDateState( new Date() ), 30000 );
        return () => { clearInterval( intervalId ) }
    }, []);

    const indexOfAt = userDetails.uid.indexOf('@')
    const userName = userDetails.uid.substring(0, indexOfAt)

    return (
        <div className="WelcomeParent fixed h-full w-full flex justify-end">
            <div className="Welcome bg-bg1 bg-center bg-cover h-header-negative relative w-full md:w-1/2 lg:w-3/4 z-10">
                <div className="h-3/5 flex flex-col items-center justify-center text-custom">
                    <div className="WelcomeText text-5xl ">Welcome,</div>
                    <div className="NameText text-white text-6xl lg:text-10xl md:text-7xl  w-full break-words text-center">{userName}</div>
                </div>
                <div className="h-2/5 flex flex-col items-center justify-center">
                    <div className="text-7xl text-yellowishWhite my-6 md:text-8xl">
                            {dateState.toLocaleString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
