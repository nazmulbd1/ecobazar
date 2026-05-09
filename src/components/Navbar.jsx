import React from 'react'
import Container from './layouts/Container'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className='bg-[#333333] text-white py-5.25'>
        <Container>
          <div>
            <ul className='flex gap-x-8 text-[#999999] font-pop text-sm font-semibold'>
              <li>
                <FaBars />
              </li>
              <li className='text-base font-bold'>
                <Link to="#">All Categories</Link>
              </li>
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">Shop</Link></li>
              <li><Link to="#">Pages</Link></li>
              <li><Link to="#">Blog</Link></li>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Navbar

// 1 h