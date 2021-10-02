import ProfilePicture from '../../Assets/ProfilePicture'

const ContactsHeader = ({uid}) => {
    return (
        

<div className="relative w-full">
<div className="fixed top-12 w-full bg-yellowishWhite flex h-12 justify-center items-center">
    <ProfilePicture/>
    <div className="ContactName headerTitle">{uid}</div>
</div>
</div>
    )
}

export default ContactsHeader
