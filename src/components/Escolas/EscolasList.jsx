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
    
      <Footer />
    </div>
  );
};

export default EscolasList;
