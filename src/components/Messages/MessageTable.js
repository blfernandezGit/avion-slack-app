import Messages from './Messages'

const MessageTable = ({messages}) => {
    return (
        <div>
            {/* Map messages into a table*/}
            {messages.map(message => {
                return <Messages key={message.id}  message = {message}/>
            })}
        </div>
    )
}

export default MessageTable
