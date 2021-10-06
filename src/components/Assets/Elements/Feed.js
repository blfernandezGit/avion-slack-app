const Feed = ({ children }) => {
    return (
        <div className="FeedParent fixed h-full w-full flex justify-end">
            <div className="Feed h-header-negative relative w-full md:w-1/2 lg:w-3/4">
                {children}
            </div>
        </div>
    )
}

export default Feed