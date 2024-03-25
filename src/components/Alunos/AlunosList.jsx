import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CadastroAluno from './CadastrosAlunos/CadastroAluno'
import AlunosDashboard from './AlunosDashboard'

import './AlunoList.css'

const AlunosList = () => {
  const [section, setSection] = useState('');

  const handleSectionChange = (newSection) => {
    setSection(newSection);
  };


  return (
    <div className='AlunoList'>
      <Navbar />
      <div className="navbar">
        <button onClick={() => handleSectionChange('cadastros')}>Cadastrar Aluno</button>
        <button onClick={() => handleSectionChange('lista-alunos')}>Lista de Alunos</button>
        <button onClick={() => handleSectionChange('grafico')}>Gráficos e Resultados</button>
      </div>

      <div className="main-container">
        {section === 'cadastros' && (
          <div>
            <p><CadastroAluno /></p>
          </div>
        )}
        {section === 'lista-alunos' && (
          <div>
            Lista de Alunos
          </div>
        )}
        {section === 'grafico' && (
          <AlunosDashboard />
        )}
      </div>

      <Footer />
    </div>
  )
}

export default AlunosList;