import { Link } from "react-router-dom"

const Channels = ({channel}) => {
    return (
        <div className="w-full h-8">
            <Link to={`/client/channels/${channel.id}`}>
                # {channel.name}
            </Link>
        </div>
    )
}

export default Channels
