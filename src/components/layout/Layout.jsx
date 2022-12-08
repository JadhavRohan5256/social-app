import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftBar from '../leftbar/LeftBar'
import NavBar from '../navbar/NavBar'
import RightBar from '../rightbar/RightBar'
import './Layout.css'
function Layout() {
  return (
    <>
      <NavBar />
      <div className="layout-wrapper container">
          <LeftBar />
            <Outlet />
          <RightBar />
      </div>
    </>
  )
}

export default Layout