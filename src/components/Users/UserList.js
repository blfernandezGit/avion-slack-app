import useFetch from '../../helpers/useFetchGet'
import UserTable from './UserTable'

const url = 'users'

const UserList = ({headers}) => {
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
