import { Link } from "react-router-dom"
import { useContext  } from 'react'
import { messagesBaseUrl, directMessagesAuditText, userReceiverClass } from '../../helpers/constants'
import { ClientContext } from '../../context/ClientContext'
import useAxiosGet from '../../helpers/useAxiosGet'
import ProfilePicture from '../Assets/ComponentSVG/ProfilePicture'

const ContactList = ({contact}) => {
    const { headers, recall, handleShowMenu } = useContext(ClientContext)

    const messageUrl = messagesBaseUrl+'?receiver_id='+contact.id+'&receiver_class='+userReceiverClass;

    const { fetchedData: messages, isLoading, errorMessage } = useAxiosGet( messageUrl, headers, null, directMessagesAuditText, recall)

    let sendDateTime

    if(messages && messages[messages?.length-1]?.created_at) {
        let date = new Date(messages[messages.length-1]?.created_at).toLocaleDateString()
        let time = new Date(messages[messages.length-1]?.created_at).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
        let currentDate = new Date(Date.now()).toLocaleDateString()
        
        if( date === currentDate ) {
            sendDateTime = time
        } else {
            sendDateTime = new Date(date).toLocaleDateString([], {  
                month: 'short',
                day: 'numeric'
            })
        }
    }

    if(messages && messages?.length === 0) {
        return <></>
    }
    return (     
        <div onClick={() => handleShowMenu(true)}className="w-5/6 h-16 bg-yellowishWhite bg-opacity-75 hover:bg-lightGrey hover:bg-opacity-80 border-2 border-pink border-opacity-50 hover:border-pink rounded-md p-2 my-2">
            <Link to={`/client/messages/${contact.id}/${contact.uid}`}>
                <div className="grid grid-cols-8 grid-rows-2 h-full relative">
                    <div className="grid place-items-center h-full col-span-1 row-span-2">
                        <ProfilePicture />
                    </div>
                    <div className="col-start-2 col-end-9 pl-4 text-custom hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-pink hover:via-pink hover:to-custom animate-gradient-x w-max">
                        {contact.uid}
                    </div>
                    <div className="col-start-2 row-start-2 h-full col-end-9 pl-4">
                        { isLoading && <p>Loading...</p> }

                        { messages &&
                            <>
                                {messages[messages.length-1]?.created_at && <div  className="absolute top-0 right-0 text-xs">{sendDateTime}</div>}
                                <div className="text-custom text-opacity-75 truncate">{messages[messages.length-1]?.body}</div>
                            </>
                        }

                        { errorMessage &&  <div>{errorMessage}</div> }
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ContactList
