import {useSelector} from 'react-redux'

const Profile = () => {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className="text-center my-8 font-semibold text-3xl">Profile</h1>
    <form className='flex flex-col gap-4'>
      <img src={currentUser.avatar} alt="profile" className='w-36 h-36 cursor-pointer rounded-full object-cover self-center' />
      <input id='username' type="text" placeholder='username' className='border p-2 max-w-xl rounded-md' />
      <input id='email' type="email" placeholder='email' className='border p-2 max-w-xl rounded-md' />
      <input id='password' type="password" placeholder='password' className='border p-2 max-w-xl rounded-md' />
      <button className='bg-green-600 text-white p-2 rounded-md hover:opacity-75 transition-opacity'>Update</button>
    </form>
    <div className='flex justify-between mt-4'>
      <span className='text-red-700'>Delete Account</span>
      <span className='text-red-700'>Sign Out</span>
    </div>
    </div>
  )
}

export default Profile