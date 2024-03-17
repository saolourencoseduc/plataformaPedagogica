import { useState } from 'react';

import './EscolasList.css';

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import CadastroAluno from './CadastroAluno';

const EscolasList = () => {
  const [section, setSection] = useState('');

  const handleSectionChange = (newSection) => {
    setSection(newSection);
  };

  return (
    <div className='EscolasList'>
      <Navbar />
      <div className="navbar-escolas">
        <button onClick={() => handleSectionChange('cadastros')}>Cadastrar Aluno</button>
        <button onClick={() => handleSectionChange('turmas')}>Turmas</button>
        <button onClick={() => handleSectionChange('series')}>Séries das Escolas</button>
        <button onClick={() => handleSectionChange('cursos')}>Cursos</button>
      </div>
      <div className="main-container">
        {section === 'cadastros' && (
          <div>
            <p><CadastroAluno /></p>
          </div>
        )}

        {section === 'turmas' && (
          <div>
            <h1>Turmas</h1>
          </div>
        )}

        {section === 'series' && (
          <div>
            <h1>Séries das Escolas</h1>
          </div>
        )}

        {section === 'cursos' && (
          <div>
            <h1>Cursos</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EscolasList;
