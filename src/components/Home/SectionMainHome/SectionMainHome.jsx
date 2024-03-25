import React from 'react'

import './SectionMainHome.css'
import { Link } from 'react-router-dom'

const SectionMainHome = () => {
  return (
    <div className='SectionMainHome'>
        <div className='escola-section'><img src="/escola2.png" alt="escola" /><Link to={'/api/escola'} target='_blank'>Escola</Link></div>

        <div className='leitura-de-prova-section'><img src="/leitura-de-prova.png" alt="gabaritos" />Gabaritos</div>

        <div className='alunos-section'><img src="/aluna.png" alt="aluna"/><Link to={'/api/aluno'} target="_blank">Alunos</Link></div>

        <div className='painel'><img src="/painel.png" alt="dashboard"/>
        <Link to={'https://app.powerbi.com/view?r=eyJrIjoiOWQ4MDlkZTUtZjI1OS00NzYzLWE4ZDctYzY2NjVlMmY2YWU4IiwidCI6IjVmMTYzNWI1LTk5MmMtNDc2NC05NTViLWQyNTg2ZTQyYjQyNSJ9'} 
        target="_blank">Dashboard</Link>
        </div>

        <div className='video-tutorial'><img src="/video-tutorial.png" alt="Tutorial"/>Tutorial</div>

        <div className='suporte-online'><img src="/suporte-online.png" alt="suporte"/>Suporte</div>

        <div className='adicionar-usuario-section'><img src="/adicionar-usuario.png" alt="adicionar novo"/><Link to={'/cadastros'}>Adicionar Usuário</Link></div>
    </div>
  )
}

export default SectionMainHome;