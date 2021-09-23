import useFetch from '../../helpers/useFetch'
import UserTable from './UserTable'

const url = 'users'
const method = 'GET'
const headers = {
    'access-token': 'jjYmE3gQDoexsMNe3ktNNw',
    'client': 'Eq9Hz1qf7eFIkR8c5izU2A',
    'expiry': '1633568827',
    'uid': 'blfernandez3@gmail.com'
}

const UserList = () => {
    const {fetchedData: users, isLoading, error} = useFetch(url, method, headers)

    return (
        <div>
            { isLoading && <p>Loading...</p> }
            { users && <UserTable users={users} /> }
            { error && <p>Cannot fetch API {error}</p> }
        </div>
    )
}

export default UserList
