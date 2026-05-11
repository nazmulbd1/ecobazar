import React from 'react'
import Container from './layouts/Container'
import { LuSearch } from 'react-icons/lu'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router';

const FooterTop = () => {
  return (
    <div className='bg-gry py-10'>
        <Container>
            <div className='flex justify-between items-center'>
                <div>
                    <h5 className='text-[24px] font-semibold font-pop'>Subcribe our Newsletter</h5>
                    <p className='max-w-[448px] font-pop text-sm text-[#999999] mt-1'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </div>
                <div className='flex'>
                    <div className="relative">
                        <input className="border border-[#E6E6E6] w-100 py-3 px-11 placeholder:text-[#808080] placeholder:font-pop placeholder:text-sm rounded-l-full rounded-r-full" type="text" placeholder="Search"/>
                        <LuSearch className="absolute top-0 translate-y-1/2 left-4 text-2xl"/>
                        <button className="font-pop font-semibold text-sm bg-primary text-white px-10 py-4 ml-[-40px] relative top-[-2px] rounded-full">
                        Search
                        </button>
                    </div>
                    <div className='flex gap-4 ml-10'>
                        <div className='w-10 h-10 rounded-full text-[#4D4D4D] hover:bg-primary hover:text-white cursor-pointer flex justify-center items-center transform duration-300'>
                            <Link to='https://www.facebook.com/nazmulsheikhnahid.1/' target="_blank">
                                <FaFacebookF className='text-2xl'/>
                            </Link>
                        </div>
                        <div className='w-10 h-10 rounded-full text-[#4D4D4D] hover:bg-primary hover:text-white cursor-pointer flex justify-center items-center transform duration-300'>
                            <Link to='https://x.com/NazmulSheikhNa2' target='_blank'>
                                <FaTwitter className='text-2xl'/>
                            </Link>
                            
                        </div>
                        <div className='w-10 h-10 rounded-full text-[#4D4D4D] hover:bg-primary hover:text-white cursor-pointer flex justify-center items-center transform duration-300'>
                            <Link to='https://www.pinterest.com/' target='_blank'>
                                <FaPinterestP className='text-2xl'/>
                            </Link>
                            
                        </div>
                        <div className='w-10 h-10 rounded-full text-[#4D4D4D] hover:bg-primary hover:text-white cursor-pointer flex justify-center items-center transform duration-300'>
                            <Link to='https://www.instagram.com/nazmulsheikhnahid/' target='_blank'>
                                <FaInstagram className='text-2xl'/>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default FooterTop