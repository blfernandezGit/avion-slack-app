import { useContext } from 'react'
import { Link } from "react-router-dom"
import { ClientContext } from "../../../../context/ClientContext"

const Channels = ({channel}) => {
    const { handleShowMenu } = useContext(ClientContext)
    return (
        <div className="w-full h-8"  onClick={() => {handleShowMenu()}}>
            <Link to={`/client/channels/${channel.id}`}>
                # {channel.name}
            </Link>
        </div>
    )
}

export default Channels
