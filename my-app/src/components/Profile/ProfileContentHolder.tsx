import ProfileHeader from "./ProfileHeader"

interface ProfileProps {
    name: string,
    id: string,
}

const ProfileContent = (props: ProfileProps) => {
    return (
        <div className='flex items-center justify-center h-full w-full'>
            <div className='flex justify-center border-2 rounded-xl w-5/6 h-5/6 border-gray-300'>
                <ProfileHeader 
                    name={props.name}
                />
            </div>
        </div>
    )
}

export default ProfileContent