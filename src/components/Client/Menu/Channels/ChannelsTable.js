import Channels from './Channels'

const ChannelsTable = ({channels}) => {
    return (
        <>
            {channels.map(channel => {
                return <Channels key={channel.id}  channel = {channel}/>
            })}
        </>
    )
}

export default ChannelsTable
