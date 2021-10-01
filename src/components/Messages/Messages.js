import { useContext, useState } from 'react'
import { ClientContext } from '../../context/ClientContext'

const Message = ({message}) => {
    const { userDetails } = useContext(ClientContext)

    const [ showDateTime, setShowDateTime ] = useState(false)

    let rowClasses = "w-full flex flex-col items-end"
    let messageClasses = "max-w-1/2 bg-pink text-white rounded-l-md py-2 px-4 outline-none"
    if(message.sender.uid !== userDetails.uid){
        rowClasses += "items-start"
        messageClasses = "max-w-1/2 w-max py-2 px-4 bg-yellowishWhite text-black rounded-r-md focus:outline-none active:outline-none"
    }

    let date = new Date(message.created_at).toLocaleDateString()
    let time = new Date(message.created_at).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    let currentDate = new Date(Date.now()).toLocaleDateString()
    console.log(date)
    console.log(currentDate)
    
    let sendDateTime = date
    if( date === currentDate ) {
        sendDateTime = time
    }

    const handleToggleDateTime = () => {
        setShowDateTime(!showDateTime)
    }

    return (
        <div className={rowClasses}>
            {/* Message details*/}
                <div className="text-lightGrey text-xs">{message.sender.uid}</div>
                <button className={messageClasses} onClick={handleToggleDateTime}>{message.body}</button>
                {showDateTime && <div className="text-lightGrey text-xs">{sendDateTime}</div>}
        </div>
    )
}

export default Message