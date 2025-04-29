import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet/>
    </div>
  )
}

export default Applayout
