import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import CadastroAluno from './CadastrosAlunos/CadastroAluno'
import './AlunoList.css'

import './Alunos.css'

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
        <button onClick={() => handleSectionChange('turmas')}>Turmas</button>
        <button onClick={() => handleSectionChange('series')}>Séries das Escolas</button>
        <button onClick={() => handleSectionChange('cursos')}>Cursos</button>
      </div>

      <div className="main-container">
        {section === 'cadastros' && (
          <div>
            <CadastroAluno />
          </div>
        )}
        {section === 'turmas' && (
          <div>
            <h1>Turmas</h1>
            <p>Conteúdo da seção de turmas...</p>
          </div>
        )}
        {section === 'series' && (
          <div>
            <h1>Séries das Escolas</h1>
            <p>Conteúdo da seção de séries...</p>
          </div>
        )}
        {section === 'cursos' && (
          <div>
            <h1>Cursos</h1>
            <div>
              <h2>Matemática</h2>
              <p>Conteúdo de Matemática</p>
            </div>
            <div>
              <h2>Português</h2>
              <p>Conteúdo de Português</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default AlunosList