import ChannelMessages from './ChannelMessages'

const ChannelMessageTable = ({messages}) => {
    return (
        <table className="ChannelMessageTable message-table">
            <tbody>
                {/* Map messages into a table*/}
                {messages.map(message => {
                    return <ChannelMessages key={message.id}  message = {message}/>
                })}
            </tbody>
        </table>
    )
}

export default ChannelMessageTable
