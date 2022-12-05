interface ProfileHeaderComponents {
    name: string
}

const ProfileHeader = (props: ProfileHeaderComponents) => {
    return (
        <div className='flex item-center mt-5 h-1/3 w-5/6 border-b-2 border-indigo-500'>
            <div className='h-full w-1/3 bg-rose-800'>

            </div>
            <label className='ml-5 mt-5 w-2/3 tracking-wider font-mono font-extrabold text-3xl text-sky-100'>
                {props.name}
            </label>
        </div>
    )
}

export default ProfileHeader