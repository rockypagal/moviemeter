import React from 'react'
import { Outlet } from 'react-router-dom'
const SharedLayout = () => {
  return (
    <>
      <h1>nav</h1>
      <Outlet/>
    </>
  )
}

export default SharedLayout