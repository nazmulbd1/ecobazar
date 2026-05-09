import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'
import Navbar from '../Navbar'

const MainLayouts = () => {
  return (
    <>
      <TopBar/>
      <SearchBar/>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default MainLayouts