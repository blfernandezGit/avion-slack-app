import { useState, useRef, useContext, useEffect } from 'react'
import { postAPI } from '../../../../helpers/useAxiosPost'
import { channelsBaseUrl, channelCreateAuditText } from '../../../../helpers/constants'
import { ClientContext } from '../../../../context/ClientContext'
import Error from '../../../Assets/Elements/Error'
import { useHistory } from 'react-router-dom'

const CreateChannel = () => {
    const { headers, handleRecall } = useContext(ClientContext)

    const channelNameRef = useRef()

    const history = useHistory()

    const [ errorMessage, setErrorMessage ] = useState( null )
    const [ successMessage, setSuccessMessage ] = useState( null )

    const [ rows, setRows ] = useState('2')
    const [ displayUsers, setDisplayUsers ] = useState( false )
    const [ options, setOptions ] = useState('More Options')

    // Function to submit a post request for creating a new channel with user
    const createChannel = (e) => {
        e.preventDefault()
        setErrorMessage(null)
        const requestData = {
            name: channelNameRef.current.value,
            user_ids: []
        }
        postAPI(channelsBaseUrl, requestData, headers, channelCreateAuditText)
            .then(data => {
                if( data[ 2 ] ) {
                    setErrorMessage( data[ 2 ][ 0 ] )
                    setTimeout(() =>{
                        setErrorMessage(null)
                    }, 3000)
                } else {
                    handleRecall()
                    setSuccessMessage('Channel successfully created')
                    history.replace( `/client/channels/${ data[ 0 ].id }` )
                    setTimeout(() =>{
                        setSuccessMessage(null)
                    }, 3000)
                }
            })
        channelNameRef.current.value = null
    }

    const handleMoreOptions = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if ( displayUsers ) {
            setRows('2')
            setDisplayUsers( false )
            setOptions('More Options')
        } else {
            setRows('4')
            setDisplayUsers(true)
            setOptions('Less Options')
        }
    }

    return (
        <>
            <form className={`grid grid-cols-12 grid-rows-${rows} w-full`} onSubmit={(e) => createChannel(e)}>
                <input required className="border-2 border-pink col-span-11 focus:border-pink border-opacity-25 focus:outline-none rounded-md my-2 px-2" type="text" ref={channelNameRef} placeholder="Channel Name"/>
                <button className="col-span-1 text-2xl text-pink hover:text-pink text-opacity-50" type="submit">
                    +
                </button>
                <button onClick={(e)=> handleMoreOptions(e)} className="col-span-full row-start-2 flex justify-start align-top text-sm text-pink text-opacity-50 hover:text-pink">{options}</button>

                {displayUsers &&
                    <div>try</div>
                }

            </form>
            { successMessage &&  <Error errorMessage={successMessage}/> }
            
            { errorMessage &&  <Error errorMessage={errorMessage}/> }
        </>
    )
}

export default CreateChannel
