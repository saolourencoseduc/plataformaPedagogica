import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [fotoUsuario, setFotoUsuario] = useState('/usuario.png');

  useEffect(() => {
    const storedPhoto = localStorage.getItem('userPhoto');
    if (storedPhoto) {
      setFotoUsuario(storedPhoto);
    }
  }, []);

  const gestorInfo = {
    nome: "Nome: gestor",
    escola: "Escola: escola",
    tipoDeEnsino: "Ensino: medio",
    localizacao: "urbana"
  };

  const handleLogout = () => {
    const isConfirmed = window.confirm('Tem certeza que deseja sair? Voltará para página de login.');
    if (isConfirmed) {
      navigate('/');
    }
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const photoURL = reader.result;
      setFotoUsuario(photoURL);
      localStorage.setItem('userPhoto', photoURL);
    };
  };

  return (
    <div className='Navbar'>
      <nav className='navegation'>
        <h1>
          <label htmlFor="file-upload" className="custom-file-upload">
            <img src={fotoUsuario} alt="foto" id='foto-usuario' />
            <i className="fa fa-plus">+</i>
          </label>
          <input type="file" accept="image/*" id="file-upload" onChange={handleFotoChange} style={{ display: 'none' }} />
        </h1>

        <div className="info-user">
          <h2 className='usuario'>{gestorInfo.nome}</h2>
          <h2 className='escola'>{gestorInfo.escola}</h2>
          <h2 className='ensino'>{gestorInfo.tipoDeEnsino}</h2>
        </div>

        <div className="buttons-back">
          <span className='back-arrow' onClick={() => window.history.back()}>
            &#8592;
          </span>

          <button className='btn-logout' onClick={handleLogout}>Sair</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
