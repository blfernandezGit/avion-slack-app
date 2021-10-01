import { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext'

const Hamburger = () => {
    const { handleShowMenu } = useContext(ClientContext)

    return (
        <svg onClick={() => handleShowMenu()}id="light" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg" className="fill-current text-white hover:text-pink">
            <g>
                <path d="m12 24c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-23c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11z"/>
            </g>
            <g>
                <path d="m16.5 8h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
            </g>
            <g>
                <path d="m16.5 12.5h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
            </g>
            <g>
                <path d="m16.5 17h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
            </g>
        </svg>
    )
}

export default Hamburger
