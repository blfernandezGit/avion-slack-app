import { useContext } from 'react'
import { Link } from "react-router-dom"
import { ClientContext } from "../../../../context/ClientContext"

const Channels = ({channel}) => {
    const { handleShowMenu } = useContext(ClientContext)
    return (
        <div className="w-full h-8"  onClick={() => {handleShowMenu()}}>
            <Link to={`/client/channels/${channel.id}`}>
                <div className=" hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-pink hover:via-pink hover:to-custom animate-gradient-x w-max">
                    # {channel.name}
                </div>
            </Link>
        </div>
    )
}

export default Channels
