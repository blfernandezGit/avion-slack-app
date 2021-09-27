const DirectMessages = ({message}) => {
    return (
        <tr>
            {/* Message details*/}
            <td>{message.sender.uid}</td>
            <td>{message.created_at}</td>
            <td>{message.body}</td>
        </tr>
    )
}

export default DirectMessages
