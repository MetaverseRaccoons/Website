import ProfileHeader from "./ProfileHeader"
import CertificateContent from "./CertificateContent"

interface ProfileProps {
    name: string,
    id: string,
    certificateIds: string[]
}

const ProfileContent = (props: ProfileProps) => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-wrap items-center justify-center mt-3 h-2/3 w-2/3 border-2 rounded'>
                <ProfileHeader
                    name={props.name}
                />
                <CertificateContent ids={props.certificateIds}/>
            </div>
        </div>
    )
}

export default ProfileContent