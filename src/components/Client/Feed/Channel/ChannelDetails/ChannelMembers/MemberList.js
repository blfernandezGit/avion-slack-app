import Members from './Members'

const MemberList = ({details, users, isLoading, zIndex}) => {
    let classes = `col-span-full row-start-2 row-end-13 bg-white rounded-md flex justify-center flex-col items-center p-4 px-6 ${zIndex}`

    return (
        <div className={classes}>
            <div className="overflow-auto overscroll-none no-scrollbar h-full w-full">
                { isLoading && <div>Loading...</div> }
                { details && 
                    details?.channel_members.map(member => { return <Members key={member.id}  member = {member} users={users}/> })
                }
            </div>
        </div>
    )
}

export default MemberList