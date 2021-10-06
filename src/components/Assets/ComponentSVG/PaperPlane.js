import { useContext } from 'react'
import { ClientContext } from '../../../context/ClientContext'

const PaperPlane = () => {
    const { textFocusClass } = useContext(ClientContext)
    let p1 = <svg height="35" viewBox="0 0 512 512" width="35" className="mb-1 ml-2"><g><path d="M0.043,245.197c0.6,10.1,7.3,18.6,17,21.5l179.6,54.3l6.6,123.8c0.3,4.9,3.6,9.2,8.3,10.8c1.3,0.5,2.7,0.7,4,0.7
	c3.5,0,6.8-1.4,9.2-4.1l63.5-70.3l90,62.3c4,2.8,8.7,4.3,13.6,4.3c11.3,0,21.1-8,23.5-19.2l74.7-380.7c0.9-4.4-0.8-9-4.2-11.8
	c-3.5-2.9-8.2-3.6-12.4-1.9l-459,186.8C5.143,225.897-0.557,235.097,0.043,245.197z M226.043,414.097l-4.1-78.1l46,31.8
	L226.043,414.097z M391.443,423.597l-163.8-113.4l229.7-222.2L391.443,423.597z M432.143,78.197l-227.1,219.7l-179.4-54.2
	L432.143,78.197z"/></g></svg>
    return (
        <div className={`border-pink ${textFocusClass} fill-current text-pink h-9 w-9 flex justify-center items-center`}>
            {p1}
        </div>
    )
}

export default PaperPlane