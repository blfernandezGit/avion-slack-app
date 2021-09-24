const Logout = ({setLoginDetails}) => {
    // Button for Logout
    // TODO: might need to rethink component - maybe just use Button Component - can be custom or from framework
    return (
        <button onClick={setLoginDetails}>Logout</button>
    )
}

export default Logout
