import loadingImage from '../Assets/Images/sakura.gif'

const LoadingScreen = () => {
    return (
        <div className="flex justify-center items-center w-full h-full bg-custom absolute z-50">
            <img src={loadingImage} alt="loading..."/>
        </div>
    )
}

export default LoadingScreen
