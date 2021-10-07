import { useState, useRef, useContext, useEffect } from 'react'
import { postAPI } from '../../../../helpers/useAxiosPost'
import { channelsBaseUrl, channelCreateAuditText } from '../../../../helpers/constants'
import { ClientContext } from '../../../../context/ClientContext'
import Error from '../../../Assets/Elements/Error'
import UserList from '../../Users/UserList'
import { useHistory } from 'react-router-dom'
import AddUsersToChannel from './AddUsersToChannel'

const CreateChannel = () => {
    const { headers, handleRecall } = useContext(ClientContext)

    const channelNameRef = useRef()

    const history = useHistory()

    const [ errorMessage, setErrorMessage ] = useState( null )
    const [ successMessage, setSuccessMessage ] = useState( null )

    const [ rows, setRows ] = useState('2')
    const [ displayUsers, setDisplayUsers ] = useState( false )
    const [ options, setOptions ] = useState('More Options')
    const [ addedUsers, setAddedUsers ] = useState([])
    const [ searchQuery, setSearchQuery ] = useState('')

    // Function to submit a post request for creating a new channel with user
    const createChannel = (e, users) => {
        e.preventDefault()
        setErrorMessage(null)
        const requestData = {
            name: channelNameRef.current.value,
            user_ids: users ? users.map(user => user.id) : []
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
                    setAddedUsers([])
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
            setRows('12')
            setDisplayUsers(true)
            setOptions('Less Options')
        }
    }

    const addToList = (user_id, user_uid) => {
        console.log('added')
        const newAddedUser = {
            id: user_id,
            uid: user_uid
        }
        setAddedUsers(prevUsers => {
            return [...prevUsers, newAddedUser]
        })
    }

    const handleAddedUsers = (newList) => {
        setAddedUsers( newList )
    }

    return (
        <>
            <form className={`grid grid-cols-12 grid-rows-${rows} w-full max-h-96`} onSubmit={(e) => createChannel(e, addedUsers)}>
                <input required className="border-2 h-6 border-pink row-span-1 col-span-11 focus:border-pink border-opacity-25 focus:outline-none rounded-md my-2 px-2" type="text" ref={channelNameRef} placeholder="Channel Name"/>
                <button className="col-span-1 text-2xl text-pink hover:text-pink text-opacity-50" type="submit">
                    +
                </button>
                <div className="flex flex-col items-start col-span-full row-span-1 ">
                <button onClick={(e)=> handleMoreOptions(e)} className="flex justify-start align-top text-sm text-pink text-opacity-50 hover:text-pink">{options}</button>
                { successMessage &&  <Error errorMessage={successMessage}/> }
                { errorMessage &&  <Error errorMessage={errorMessage}/> }
                </div>

                {displayUsers &&
                <>
                    <form className="row-start-3 col-span-full flex items-end">
                        <input type="text" placeholder="Search Users..." className="border-2 border-opacity-50 border-pink focus:border-pink focus:outline-none rounded-t-md w-full text-sm px-1" onChange={(e) =>setSearchQuery(e.target.value)}/> 
                    </form>
                    <div className="bg-white h-full col-span-full row-start-4 row-end-8 flex flex-col flex-start w-full border-2 border-pink border-opacity-50">
                        <UserList 
                            onClick={addToList}
                            searchQuery={searchQuery}
                            addedUsers = {addedUsers}
                        />
                    </div>
                    
                    <div className="bg-white rounded-b-md h-full col-span-full row-start-8 row-end-13 flex flex-col flex-start w-full border-2 border-pink border-opacity-50">
                        <div className="text-xs text-lightGrey w-full">Click on user to remove from add list</div>
                        <div className="overflow-y-auto overscroll-none no-scrollbar w-full">
                            { addedUsers.length ? 
                                addedUsers.map( ( user, index ) => {
                                    return <AddUsersToChannel
                                                user={user}
                                                key={index}
                                                index={index}
                                                addedUsers={addedUsers}
                                                handleAddedUsers={handleAddedUsers}
                                            />
                                })
                                :
                                <div className="text-pink text-opacity-50">No users added to Channel</div>
                            }
                        </div>
                    </div>
                </>
                }

            </form>
        </>
    )
}

export default CreateChannel
