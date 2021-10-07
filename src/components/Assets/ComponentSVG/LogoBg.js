import logo from  '../Images/Kaizen.png'
import sakuraBg from '../Images/sakura.png'
import HalfContainer from '../Elements/HalfContainer'

const LogoBg = () => {
    return (
        <HalfContainer>
            <img src={sakuraBg} alt="" className="absolute top-0"/>
            <img src={logo} alt="Kaizen Logo" className="z-10"/>
        </HalfContainer>
    )
}

export default LogoBg
