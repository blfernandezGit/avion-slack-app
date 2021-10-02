import { useEffect, useRef} from 'react'
import MemberTable from './MemberTable'

const MemberList = ({details, users, isLoading}) => {
    console.log()
    const bottomRef = useRef()

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect(() => {
        scrollToBottom();
    }, []);

    return (
        <div className="max-h-48 bg-white rounded-md my-2 flex justify-center flex-col items-center w-1/2 mr-3">
            <div className="text-sm">Channel Members:</div>
            <div className="float-left clear-both" ref={bottomRef} />
            <div className="overflow-auto overscroll-none text-center no-scrollbar">
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