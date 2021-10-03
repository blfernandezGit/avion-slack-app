const HomePage = () => {
    const bgArray = [ 'bg1', 'bg2', 'bg3', 'bg4' ]
    const bgIndex = Math.floor( Math.random() * bgArray.length )
    const bgImage = bgArray[ bgIndex ]
    
    return (
        <div className={`h-screen w-screen bg-${bgImage}`}>
            {/* <img src={HomeBG} alt='home-bg'/> */}
        </div>
    )
}

export default HomePage
