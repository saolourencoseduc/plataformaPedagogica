import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import './Alunos.css'

const AlunosList = () => {
  return (
    <div className='AlunoList'>
      <Navbar />
      <div className="main-container">
        <h1>alunos aqui</h1>
      </div>
      <Footer />
    </div>
  )
}

export default AlunosList