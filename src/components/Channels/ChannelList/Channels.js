import { Link } from "react-router-dom";

const Channels = ({channel}) => {
    return (
        <tr>
            {/* Channel details */}
            <td>
                <Link to={`/client/channels/${channel.id}`}>
                    # &nbsp; &nbsp; {channel.name}
                </Link>
            </td>
        </tr>
    )
}

export default Channels
