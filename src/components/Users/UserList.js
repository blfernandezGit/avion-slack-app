import useFetch from '../../helpers/useFetchGet'
import UserTable from './UserTable'

const url = 'users'
const headers = {
    'access-token': 'qYXDfbgm7H3tQfm0K3ASOg',
    'client': 'qYXDfbgm7H3tQfm0K3ASOg',
    'expiry': '1633617309',
    'uid': 'blfernandez3@gmail.com'
}

const UserList = () => {
    const {fetchedData: users, isLoading, error} = useFetch(url, headers)

    return (
        <div>
            { isLoading && <p>Loading...</p> }
            { users && <UserTable users={users} /> }
            { error && <p>Cannot fetch API {error}</p> }
        </div>
    )
}

export default UserList
