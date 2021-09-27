import DirectMessages from './DirectMessages'

const DirectMessageTable = ({messages}) => {
    console.log(messages)
    return (
        <table className="DirectMessageTable message-table">
            <tbody>
                {/* Map messages into a table*/}
                {messages.map(message => {
                    return <DirectMessages key={message.id}  message = {message}/>
                })}
            </tbody>
        </table>
    )
}

export default DirectMessageTable
