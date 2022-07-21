import React from 'react'
import { Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'


const Principal = () => {
  return (
    <div>

    <Header />
    <Navbar />
    <Outlet />
    </div>
  )
}

export default Principal