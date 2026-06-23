import React from 'react'
import Container from './layouts/Container'
import { MoveRight, PencilIcon } from 'lucide-react'
import Latestnews1 from "../assets/images/Latestnews1.webp"
import { RiAdminFill } from 'react-icons/ri'
import { BiComment } from 'react-icons/bi'
import { Link } from 'react-router'

const LatestNews = () => {
  return (
    <div>
        <Container>
            <div className='font-pop'>
                <h3>Latest News</h3>
                <div className='flex'>
                    <div>
                        <img src={Latestnews1} alt="Latestnews1" />
                        <div className='flex gap-6'>
                            <div className='flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5'> 
                                <PencilIcon/> Food
                            </div>
                            <div className='flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5'> 
                                <RiAdminFill/> By Adim
                            </div>
                            <div className='flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5'> 
                                <BiComment/> 65 Comments
                            </div>
                        </div>
                        <div>
                            <p className='text-[18px] text-[#2C742F] font-pop font-medium'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                            <Link to="#" className='flex gap-2 text-[16px] text-[#00B207]'>Read More <MoveRight/> </Link>
                        </div>
                    </div>
                    <div>
                        <img src={Latestnews1} alt="Latestnews1" />
                        <div className='flex gap-6'>
                            <div className='flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5'> 
                                <PencilIcon/> Food
                            </div>
                            <div className='flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5'> 
                                <RiAdminFill/> By Adim
                            </div>
                            <div className='flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5'> 
                                <BiComment/> 65 Comments
                            </div>
                        </div>
                        <div>
                            <p className='text-[18px] text-[#2C742F] font-pop font-medium'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                            <Link to="#" className='flex gap-2 text-[16px] text-[#00B207]'>Read More <MoveRight/> </Link>
                        </div>
                    </div>
                    <div>
                        <img src={Latestnews1} alt="Latestnews1" />
                        <div className='flex gap-6'>
                            <div className='flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5'> 
                                <PencilIcon/> Food
                            </div>
                            <div className='flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5'> 
                                <RiAdminFill/> By Adim
                            </div>
                            <div className='flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5'> 
                                <BiComment/> 65 Comments
                            </div>
                        </div>
                        <div>
                            <p className='text-[18px] text-[#2C742F] font-pop font-medium'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                            <Link to="#" className='flex gap-2 text-[16px] text-[#00B207]'>Read More <MoveRight/> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default LatestNews