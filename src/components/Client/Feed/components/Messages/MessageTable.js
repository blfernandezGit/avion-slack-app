import Messages from './Messages'

const MessageTable = ({messages}) => {
    return (
        <>
            {/* Map messages into a table*/}
            {messages.map(message => {
                return <Messages key={message.id}  message = {message}/>
            })}
        </>
    )
}

export default MessageTable
