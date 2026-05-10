import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'
import Navbar from '../Navbar'
import Footer from '../Footer'

const MainLayouts = () => {
  return (
    <>
      <TopBar/>
      <SearchBar/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayouts