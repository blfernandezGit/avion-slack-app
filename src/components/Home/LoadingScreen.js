import loadingImage from '../Assets/Images/sakura.gif'

const LoadingScreen = () => {
    let bgColor;
    const colorArray = ['bg-custom', 'bg-lightGrey', 'bg-yellowishWhite']
    const randomIndex = Math.floor(Math.random() * 3)
    bgColor = colorArray[randomIndex]

    return (
        <div className={`flex justify-center items-center w-full h-full ${bgColor} absolute z-50`}>
            <img src={loadingImage} alt="loading..."/>
        </div>
    )
}

export default LoadingScreen
