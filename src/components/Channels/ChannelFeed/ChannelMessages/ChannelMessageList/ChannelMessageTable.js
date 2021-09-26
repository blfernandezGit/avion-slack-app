import ChannelMessage from './ChannelMessage'

const ChannelMessageTable = ({messages}) => {
    return (
        <table className="ChannelMessageTable message-table">
            <tbody>
                {/* Map members into a table*/}
                {messages.map(message => {
                    return <ChannelMessage key={message.id}  message = {message}/>
                })}
            </tbody>
        </table>
    )
}

export default ChannelMessageTable
