import ProfileContent from '../components/Profile/ProfileContentHolder'

const Profile = () => {
    const ids: string[] = ['0', '1']
    return (
        <div className="h-screen w-screen">
            <ProfileContent name='bben7' id='7' certificateIds={ids}/>
        </div>
    )
}

export default Profile