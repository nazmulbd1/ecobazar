import React from 'react'
import { Outlet, useLocation } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FooterTop from '../FooterTop'
import Breadcrumb from '../Breadcrumb'

const MainLayouts = () => {
  let pageName = useLocation().pathname
  console.log(pageName.pathname)

  return (
    <>
      <TopBar/>
      <SearchBar/>
      <Navbar/>
      {pageName !== '/' && <Breadcrumb/>}
      <Outlet/>
      <FooterTop/>
      <Footer/>
    </>
  )
}

export default MainLayouts