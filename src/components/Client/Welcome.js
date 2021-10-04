import { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../../context/ClientContext'

const Welcome = () => {
    const { userDetails } = useContext(ClientContext)
    const [ dateState, setDateState ] = useState(new Date())

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <div className="WelcomeParent fixed h-full w-full flex justify-end">
            <div className="Welcome bg-bg1 bg-center bg-contain h-header-negative relative w-full md:w-1/2 lg:w-3/4 z-10">
                <div className="h-3/5 flex flex-col items-center justify-center text-custom">
                    <div className="text-4xl">Welcome,</div>
                    <div className="text-5xl">{userDetails.uid}</div>
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
