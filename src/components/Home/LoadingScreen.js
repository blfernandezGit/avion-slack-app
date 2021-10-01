import loadingImage from '../Assets/Images/sakura.gif'

const LoadingScreen = () => {
    let bgColor;
    const colorArray = ['bg-custom', 'bg-dirtyWhite']
    const randomIndex = Math.floor(Math.random() * 2)
    bgColor = colorArray[randomIndex]

    return (
        <div className={`flex justify-center items-center w-full h-full ${bgColor} absolute z-50`}>
            <img src={loadingImage} alt="loading..." className="h-1/2"/>
        </div>
    )
}

export default LoadingScreen