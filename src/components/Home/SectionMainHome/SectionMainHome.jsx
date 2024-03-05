import React from 'react'

import './SectionMainHome.css'
import { Link } from 'react-router-dom'

const SectionMainHome = () => {
  return (
    <div className='SectionMainHome'>
        <div className='escola-section'><img src="/escola2.png" alt="escola" /><Link to={'/api/escola'}>Escola</Link></div>

        <div className='leitura-de-prova-section'><img src="/leitura-de-prova.png" alt="gabaritos" />Gabaritos</div>

        <div className='alunos-section'><img src="/aluna.png" alt="aluna"/>Alunos</div>

        <div className='painel'><img src="/painel.png" alt="dashboard"/>Dashoboard</div>

        <div className='suporte-online'><img src="/suporte-online.png" alt="suporte"/>Suporte</div>

        <div className='video-tutorial'><img src="/video-tutorial.png" alt="Tutorial"/>Tutorial</div>

        <div className='adicionar-usuario-section'><img src="/adicionar-usuario.png" alt="adicionar novo"/>Adicionar Usuário</div>
    </div>
  )
}

export default SectionMainHome;