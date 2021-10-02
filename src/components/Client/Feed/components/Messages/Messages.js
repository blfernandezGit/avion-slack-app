import { useContext, useState } from 'react'
import { ClientContext } from '../../../../../context/ClientContext'

const Message = ({message}) => {
    const { userDetails } = useContext(ClientContext)

    const [ showDateTime, setShowDateTime ] = useState(false)

    let rowClasses = "w-full flex flex-col items-end"
    let messageClasses = "max-w-1/2 bg-pink text-white rounded-l-lg rounded-tr-lg py-2 px-4 my-1 outline-none transform hover:-translate-x-2 duration-300 ease-in-out "
    let senderClasses = "hidden"
    if(message.sender.uid !== userDetails.uid){
        rowClasses += "items-start"
        messageClasses = "max-w-1/2 w-max py-2 px-4 bg-yellowishWhite text-black rounded-r-lg rounded-tl-lg focus:outline-none active:outline-none transform hover:translate-x-2 duration-300 ease-in-out "
        senderClasses = "text-lightGrey text-xs"
    }

    let date = new Date(message.created_at).toLocaleDateString()
    let time = new Date(message.created_at).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    let currentDate = new Date(Date.now()).toLocaleDateString()
    
    let sendDateTime = date
    if( date === currentDate ) {
        sendDateTime = time
    }

    const handleToggleDateTime = (val) => {
        setShowDateTime(val)
    }

    return (
        <div className={rowClasses}>
            {/* Message details*/}
                <div className={senderClasses}>{message.sender.uid}</div>
                <button className={messageClasses} onMouseOver={() => handleToggleDateTime(true)} onMouseLeave={() => handleToggleDateTime(false)} onClick={() => handleToggleDateTime(!showDateTime)}>{message.body}</button>
                {showDateTime && <div className="text-lightGrey text-xs">{sendDateTime}</div>}
        </div>
    )
}

export default Message