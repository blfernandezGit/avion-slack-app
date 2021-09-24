import Channels from './Channels'

const ChannelsTable = ({channels}) => {
    return (
        <table>
            <tbody>
                {/* Map channels into a table*/}
                {channels.map(channel => {
                    return <Channels key={channel.id}  channel = {channel}/>
                })}
            </tbody>
        </table>
    )
}

export default ChannelsTable
