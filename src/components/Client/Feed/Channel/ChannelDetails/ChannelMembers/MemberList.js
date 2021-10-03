import MemberTable from './MemberTable'

const MemberList = ({details, users, isLoading, zIndex}) => {
    let classes = `col-span-full row-start-2 row-end-13 bg-white rounded-md flex justify-center flex-col items-center p-4 ${zIndex}`

    return (
        <div className={classes}>
            <div className="overflow-auto overscroll-none no-scrollbar h-full w-full">
                { isLoading && <div>Loading...</div> }
                { details && 
                    <MemberTable 
                        members={details?.channel_members} 
                        users={users}
                    />
                }
            </div>
        </div>
    )
}

export default MemberList