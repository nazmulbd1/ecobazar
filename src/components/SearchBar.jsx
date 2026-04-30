import React from 'react'
import Container from './layouts/Container'
import Logo from '../assets/images/Logo.webp'
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return (
    <>
        <Container>
            <div className='flex justify-between'>
                <div><img src={Logo} alt="Logo" fetchPriority='high' loadin='lazy' /></div>
                <div>
                  <LuSearch className='relative top-[35px] left-[20px]'/>
                  <input className='border border-[#E6E6E6] w-[498px] py-3 px-11 placeholder:text-[#808080] placeholder:font-pop placeholder:text-sm rounded' type="text" placeholder='Search'/>
                </div>
                <div>abc</div>
            </div>
        </Container>
    </>
  )
}

export default SearchBar