import React from 'react'
import Container from './layouts/Container'
import Footer_Logo from '../assets/images/Footer_Logo.webp'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-black'>
        <Container>
            <div className='flex text-white justify-between items-center py-15'>
                <div>
                    <img src={Footer_Logo} alt="Footer_Logo" />
                    <p className='max-w-84 pt-4 pb-5.5 text-[#999999]'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                    <div>
                        <Link to='tel:2195550114' className='inline-block mr-2 border-b border-primary'>(219) 555-0114</Link>
                        <span className='text-[#999999]'>or</span>
                        <Link to='mailto:Proxy@gmail.com' className='inline-block ml-2 border-b border-primary'>Proxy@gmail.com</Link>
                    </div>
                </div>
                <div>
                    <h5 className='text-base font-pop font-semibold mb-5'>My Account</h5>
                    <ul className='text-sm text-[#999999] font-pop flex flex-col gap-3'>
                        <li className='hover:text-white'>My Account</li>
                        <li className='hover:text-white'>Order History</li>
                        <li className='hover:text-white'>Shoping Cart</li>
                        <li className='hover:text-white'>Wishlist</li>
                    </ul>
                </div>
                <div>
                    <h5 className='text-base font-pop font-semibold mb-5'>Helps</h5>
                    <ul className='text-sm text-[#999999] font-pop flex flex-col gap-3'>
                        <li className='hover:text-white'>Contact</li>
                        <li className='hover:text-white'>FAQS</li>
                        <li className='hover:text-white'>Terms & Condition</li>
                        <li className='hover:text-white'>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h5 className='text-base font-pop font-semibold mb-5'>Proxy</h5>
                    <ul className='text-sm text-[#999999] font-pop flex flex-col gap-3'>
                        <li className='hover:text-white'>About</li>
                        <li className='hover:text-white'>Shop</li>
                        <li className='hover:text-white'>Product</li>
                        <li className='hover:text-white'>Track Order</li>
                    </ul>
                </div>
                <div>
                    <h5 className='text-base font-pop font-semibold mb-5'>Categories</h5>
                    <ul className='text-sm text-[#999999] font-pop flex flex-col gap-3'>
                        <li className='hover:text-white'>Fruit & Vegetables</li>
                        <li className='hover:text-white'>Meat & Fish</li>
                        <li className='hover:text-white'>Bread & Bakery</li>
                        <li className='hover:text-white'>Beauty & Health</li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer