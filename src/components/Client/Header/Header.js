import Hamburger from "../../Assets/ComponentSVG/Hamburger"
import UserProfile from "./UserProfile"
import FormInput from '../../Assets/Elements/FormInput'

const Header = () => {
    const handleSearch = () => {

    }

    return (
        <div className="relative h-12">
            <div className="bg-custom fixed grid grid-cols-6 py-2 top-0 w-full z-40">
                <Hamburger className="col-span-1"/>

                {/* Search Bar TODO: add functionality OPTIONAL*/}
                <form onSubmit = {handleSearch} className="col-span-4">
                    <FormInput type="text" name="search-field" placeholder="Search..." search={true}/>
                </form>

                {/* Image TODO: will be clickable to display user profile*/}
                {/* <img className="profilePicture" src="https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2015%2F03%2F1-ryU77MsLt5tnp3ow8kqELA.png&signature=c2f2ef41e723eb1e3bef47581d1d8403" alt="dp-placeholder"/> */}

                {/* TODO: Convert to modal */}
                {/* <UserProfile/> */}

            </div>
        </div>
    )
}

export default Header
