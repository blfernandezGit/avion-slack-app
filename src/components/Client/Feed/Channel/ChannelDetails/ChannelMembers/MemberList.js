import Members from './Members'
import { useState } from 'react'

const MemberList = ({details, users, isLoading, zIndex}) => {
    let classes = `col-span-full row-start-3 row-end-13 bg-white rounded-md flex justify-center flex-col items-center p-4 px-6 ${zIndex}`
const [memberSearch, setMemberSearch] = useState('')

console.log(memberSearch)

    return (
        <div className={classes}>
            <input type="text" onChange={(e) => setMemberSearch(e.target.value)}></input>
            <div className="overflow-auto overscroll-none no-scrollbar h-full w-full">
                { isLoading && <div>Loading...</div> }
                { details && 
                    details?.channel_members
                    .filter(member => memberSearch === '' || member.user_id.toString().includes(memberSearch) )
                    .map(member => { return <Members key={member.user_id}  member = {member} users={users}/> })
                }
            </div>
        </div>
    )
}

export default MemberList