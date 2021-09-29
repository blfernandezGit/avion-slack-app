import { Link } from "react-router-dom"
import { useContext } from 'react'
import { ClientContext } from '../../../context/ClientContext'

const Channels = ({channel}) => {
    const { handleShowMenu } = useContext(ClientContext)
    return (
        <tr>
            {/* Channel details */}
            <td>
                <Link to={`/client/channels/${channel.id}`} onClick={(e)=>{handleShowMenu(e)}}>
                    # {channel.name}
                </Link>
            </td>
        </tr>
    )
}

export default Channels
