import React from 'react';
import Navbar from '../Navbar/Navbar';
import './EscolasList.css';
import Footer from '../Footer/Footer';

const EscolasList = () => {
  return (
    <div className='EscolasList'>
      <Navbar />
      <div className="main-container">
        <h1>Escolas</h1>
      </div>
      <Footer />
    </div>
  );
};

export default EscolasList;
