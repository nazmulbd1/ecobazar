import React from 'react'
import BreadCrumbBanner from '../assets/images/Breadcrumb-Banner.webp'
import Container from './layouts/Container'
import { GrHomeRounded } from "react-icons/gr";
import { Link, useLocation } from 'react-router';

const Breadcrumb = () => {
  let pageName = useLocation()
  let arr = pageName.pathname.split('/')

  return (
    <div style={{background: `url(${BreadCrumbBanner})`}}>
        <Container>
          <div className='flex items-center gap-2 py-5'>
            <Link to='/'><GrHomeRounded className='text-2xl text-[#808080]'/></Link>
            {
              arr.map((item, index)=>(
                <span key={index} className='font-pop text-[16px] text-[#999999]'>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {index < arr.length -1 && <span className='mx-2 text-[#999999]'>{'/'.replace('/', '>')}</span>}
                </span>
              ))
            }
          </div>
        </Container>
    </div>
  )
}

export default Breadcrumb
