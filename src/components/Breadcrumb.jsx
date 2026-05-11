import React from 'react'
import BreadCrumbBanner from '../assets/images/Breadcrumb-Banner.webp'
import Container from './layouts/Container'
import { GrHomeRounded } from "react-icons/gr";
import { useLocation } from 'react-router';

const Breadcrumb = () => {
  let pageName = useLocation().pathname
  let path = pageName.split('/')
  console.log(path)

  return (
    <div style={{background: `url(${BreadCrumbBanner})`}}>
        <Container>
          <div className='flex items-center gap-2 py-5'>
            <GrHomeRounded className='text-2xl text-[#808080]'/>
            <span className='font-pop text-[16px] text-[#999999]'>{pageName.replace('/', '>')}</span>
          </div>
        </Container>
    </div>
  )
}

export default Breadcrumb

// 53 min