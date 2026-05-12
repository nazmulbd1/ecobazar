import React from 'react'
import { Link } from 'react-router'

const Registration = () => {
  return (
    <div className='w-[520px] font-pop bg-white p-6 shadow-md my-10 mx-auto rounded-md'>
      <h3 className='font-pop font-semibold text-[32px] text-center mb-5'>Create Account</h3>
      <input type="text" placeholder='Full Name' className='w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-[16px]'/>
      <input type="text" placeholder='Email' className='w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-4 rounded-md text-[16px]' />
      <input type="text" placeholder='Password' className='w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-[16px]' />
      <div className='flex items-center my-4 text-[#666666]'>
        <input type="checkbox" className='mr-2' />
        <label className='font-pop text-sm'>Accept all Terms and Conditions.</label>
      </div>
      <button className='w-full bg-primary text-white py-2 rounded-full font-pop text-sm hover:bg-blue-600 cursor-pointer'>Create Account</button>
      <p className='text-center mt-4 text-sm text-[#999999]'>Already have account. <Link to='/login' className='text-[#1A1A1A] cursor-pointer hover:text-primary'>Login</Link></p>
    </div>
  )
}

export default Registration