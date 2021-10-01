import Messages from './Messages'

const MessageTable = ({messages}) => {
    return (
        <table className="MessageTable message-table">
            <tbody>
                {/* Map messages into a table*/}
                {messages.map(message => {
                    return <Messages key={message.id}  message = {message}/>
                })}
            </tbody>
        </table>
    )
}

export default MessageTable
