interface ProfileHeaderComponents {
    name: string
}

const ProfileHeader = (props: ProfileHeaderComponents) => {
    return (
        <div className='flex flex-wrap item-center mt-5 h-1/3 w-5/6 border-b-2 border-gray-300'>
            <label className='mt-5 w-1/2 h-1/3 tracking-wider font-mono font-extrabold text-3xl text-gray-700'>
                {props.name}
            </label>
            <label className='mt-5 w-1/2 h-1/3 tracking-wider font-mono text-xl text-gray-500'>
                pro automobilist
            </label>
            <div className='h-full w-1/3 bg-rose-100'>
                mooie foto hier :)
            </div>
        </div>
    )
}

export default ProfileHeader