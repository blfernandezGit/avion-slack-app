import UserList from './Users/UserList'
import Logout from './Login/Logout'

const ChatContainer = ({fetchedData, headers, setLoginDetails}) => {
    return (
        <div>
            <Logout 
                setLoginDetails={setLoginDetails}
            />

            <div>Logged In!</div>
            <div>Email: {fetchedData.email}</div>
            <div>Name: {fetchedData.name}</div>
            <div>Image: {fetchedData.image}</div>

            <div>access-token: {headers['access-token']}</div>
            <div>Name: {headers.client}</div>
            <div>Expiry: {headers.expiry}</div>
            <div>uid: {headers.uid}</div>

            <UserList 
                headers={headers}
            />
        </div>
    )
}

export default ChatContainer
