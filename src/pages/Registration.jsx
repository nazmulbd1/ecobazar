import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { FaR, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Registration = () => {

  let navigate = useNavigate()
  const [regData, setRegData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  })

  let [errorMsg, setErrorMsg] = useState('')
  let [successMsg, setSuccessMsg] = useState('')
  let [eyeShow, setEyeShow] = useState(false)
  let [eyeShowConfirm, setEyeShowConfirm] = useState(false)

  let handleChange =(e)=>{
    console.log(e.target.name, e.target.value)
    let name = e.target.name 
    let value = e.target.value

    if(name !== 'terms'){
      setRegData({...regData, [name]:value})
    }
    else{
      setRegData({...regData, terms: !regData.terms})
    }
  }

  let handleClick = async()=>{
    // Email empty check
    if(!regData.email){
      setErrorMsg('Email is required')
      setSuccessMsg('')
      return
  }

    // Valid email check
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailPattern.test(regData.email)){
      setErrorMsg('Please enter a valid email')
      setSuccessMsg('')
      return
  }

    let user = await axios.post('http://localhost:5000/registration', regData)
    let {success, message} = user.data
    console.log(success)
    if(!success){
      setErrorMsg(message)
      setSuccessMsg('')
    }
    else{
      setSuccessMsg(message)
      setErrorMsg('')
      navigate('/login')
    }
  }
  
  return (
    <div className='w-[520px] font-pop bg-white p-6 shadow-md my-10 mx-auto rounded-md'>
      <h3 className='font-pop font-semibold text-[32px] text-center mb-5'>Create Account</h3>
      {errorMsg && <p className='bg-red-500 mb-2 text-center rounded'>{errorMsg}</p>}
      {successMsg && <p className='bg-green-500 mb-2 text-center rounded'>{successMsg}</p>}
      <input onChange={handleChange} name='email' type="email" placeholder='Email' className='w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-[16px]'/>

      <div className='relative'>
        <input onChange={handleChange} name='password' type={eyeShow? 'text':'password'} placeholder="Password" className='w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-4 rounded-md text-[16px] pr-10' />
        <div className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600' onClick={()=>setEyeShow(!eyeShow)}>
          {eyeShow ?
          <FaRegEye />
          :
          <FaRegEyeSlash />
          }
        </div>
      </div>
      
      <div className='relative'>
        <input onChange={handleChange} name='confirmPassword' type={eyeShowConfirm? 'text':'password'} placeholder='Confirm Password' className='w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-[16px] pr-10' />
        <div className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600' onClick={()=>setEyeShowConfirm(!eyeShowConfirm)}>
          {eyeShowConfirm ?
          <FaRegEye/>
          :
          <FaRegEyeSlash/>
          }
        </div>
      </div>
      <div className='flex items-center my-4 text-[#666666]'>
        <input id='agree' onChange={handleChange} name='terms' type="checkbox" className='mr-2' />
        <label htmlFor='agree' className='font-pop text-sm'> Accept all Terms and Conditions.</label>
      </div>
      <button onClick={handleClick} className='w-full bg-primary text-white py-2 rounded-full font-pop text-sm hover:bg-blue-600 cursor-pointer'>Create Account</button>
      <p className='text-center mt-4 text-sm text-[#999999]'>Already have account. <Link to='/login' className='text-[#1A1A1A] cursor-pointer hover:text-primary'>Login</Link></p>
    </div>
  )
}

export default Registration

