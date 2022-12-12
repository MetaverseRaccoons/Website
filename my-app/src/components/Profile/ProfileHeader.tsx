interface ProfileHeaderComponents {
    name: string
}

const ProfileHeader = (props: ProfileHeaderComponents) => {
    return (
        <div className='mt-5 h-1/3 w-5/6 border-b-2 border-gray-300'>
            <div className='w-1/2 h-full flex-wrap'>
                <label className='w-full h-1/2 tracking-wider font-mono font-extrabold text-3xl text-gray-800 block'>
                    {props.name}
                </label>
                <label className='bottom-0 w-full h-1/2 tracking-wider font-mono text-xl text-gray-500 block'>
                    pro automobilist
                </label>
            </div>
        </div>
    )
}

export default ProfileHeader