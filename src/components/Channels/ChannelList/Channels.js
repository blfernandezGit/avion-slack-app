import { Link } from "react-router-dom";

const Channels = ({channel}) => {
    return (
        <tr>
            {/* Channel details */}
            <td>{channel.name}</td>
        </tr>
    )
}

export default Channels