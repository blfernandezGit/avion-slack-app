import { useContext, useEffect, useRef  } from 'react'
import Messages from './Messages'
import { messagesBaseUrl, channelMessagesAuditText, directMessagesAuditText, channelReceiverClass, userReceiverClass } from '../../../../../helpers/constants'
import { ClientContext } from '../../../../../context/ClientContext'
import useAxiosGet from '../../../../../helpers/useAxiosGet'

const MessageList = ({details, id}) => {
    const { headers, recall } = useContext(ClientContext)

    const bottomRef = useRef()

    let userId
    let receiverClass

    if( details ) { 
        userId = details.id
        receiverClass = channelReceiverClass
    } else {
        userId = id
        receiverClass = userReceiverClass
    }

    const messageUrl = messagesBaseUrl+'?receiver_id='+userId+'&receiver_class='+receiverClass;

    // Use custom react hook - useAxiosGet - to automatically call API request for retrieving Messages of User
    const { fetchedData: messages, isLoading, errorMessage } = useAxiosGet( messageUrl, headers, null, details ? channelMessagesAuditText : directMessagesAuditText, recall)

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <>
            <div className="MessageList w-full no-scrollbar h-double-header-negative absolute top-12 overflow-y-auto overflow-x-hidden flex flex-col overscroll-none p-8 pb-8">
                { isLoading && <div className="w-full h-full grid place-items-center text-xl text-white text-opacity-75" >Loading...</div> }

                { ( messages && messages.length>0 ) ? 
                    messages.map(message => {
                        return <Messages key={message.id}  message = {message}/>
                    })
                    :
                    !isLoading && <div className="w-full h-full grid place-items-center text-xl text-white text-opacity-75" >Start Conversation</div>
                }

                { errorMessage &&  <div>{errorMessage}</div> }

                <div className="float-left clear-both" ref={bottomRef} />
            </div>
        </>
    )
}

export default MessageList