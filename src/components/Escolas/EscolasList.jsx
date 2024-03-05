import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


const EscolasList = () => {
  return (
    <div className='EscolasList'>
      <Navbar />
      <Outlet />
      teste
    </div>
  )
}

export default EscolasList