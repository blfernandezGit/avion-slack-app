const InviteUsers = ({ user, index, addedUsers, handleAddedUsers }) => {
    const handleRemove = (e) => {
        e.preventDefault();
        console.log(index)
        let tempAddedUsers = [...addedUsers]
        console.log(e.target.dataset.index)
        tempAddedUsers.splice(e.target.dataset.index, 1)
        handleAddedUsers(tempAddedUsers)
    }
    
    return (
        <button onClick={(e) => {handleRemove(e)} } data-index={ index } className="w-full h-8 text-left">
            {user.uid}
        </button>
    )
}

export default InviteUsers
