import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const gestorInfo = {
    nome: "gestor",
    escola:"escola",
    tipoDeEnsino:"medio",
    localizacao: "urbana"
  };

  const handleLogout = () => {
    const isConfirmad = window.confirm('Tem certeza que deseja sair? Voltará para página de login.')
    if (isConfirmad) {
      navigate('/')      
    }
  }

  return (
    <div className='Navbar'>
        <nav className='navegation'>
            <h1><img src="/usuario.png" alt="foto" id='logo-nav-home'/></h1>

              <h2 className='escola'>{gestorInfo.escola}</h2>
              <h2 className='usuario'>{gestorInfo.nome}</h2>
            <button className='btn-logout' onClick={handleLogout}>Sair</button>
        </nav>
    </div>
  )
}

export default Navbar