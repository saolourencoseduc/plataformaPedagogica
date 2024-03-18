import React, { useState } from 'react';

import './CadastroAluno.css'

const CadastroAluno = () => {
  const [formDataAluno, setFormDataAluno] = useState({
    codigoAluno: '',
    codigoInep: '',
    raAluno: '',
    nomeAluno: '',
    dataNascimento: '',
    cpf: '',
    rg: '',
    nomePai: '',
    nomeMae: '',
    nomeResponsavel: ''
  });

  const handleInputChangeAluno = (e) => {
    const { name, value } = e.target;
    setFormDataAluno({ ...formDataAluno, [name]: value });
  };

  const handleSubmitAluno = (e) => {
    e.preventDefault();
    console.log('Dados do formulário aluno:', formDataAluno);

    setFormDataAluno({
      codigoAluno: '',
      codigoInep: '',
      raAluno: '',
      nomeAluno: '',
      dataNascimento: '',
      cpf: '',
      rg: '',
      nomePai: '',
      nomeMae: '',
      nomeResponsavel: ''
    });
  };

  return (
    <div className='CadastroAluno'>
      <h1>Cadastro Aluno</h1>
      <form onSubmit={handleSubmitAluno}>
        <label>
          Código Aluno:
          <input type='text'
          name='codigoAluno' 
          value={formDataAluno.codigoAluno} 
          onChange={handleInputChangeAluno} 
          placeholder="Código Aluno" 
          />
        </label>
        <br />
        <label>
          Código INEP:
          <input type='text' 
          name='codigoInep' 
          value={formDataAluno.codigoInep} 
          onChange={handleInputChangeAluno} 
          placeholder="Código INEP" 
          />
        </label>
        <br />
        <label>
          RA Aluno:
          <input type='text' 
          name='raAluno' 
          value={formDataAluno.raAluno} 
          onChange={handleInputChangeAluno} 
          placeholder="RA Aluno" 
          />
        </label>
        <br />
        <label>
          Nome Aluno:
          <input type='text' 
          name='nomeAluno' 
          value={formDataAluno.nomeAluno} 
          onChange={handleInputChangeAluno} 
          placeholder="Nome Aluno" 
          />
        </label>
        <br />
        <label>
          Data de Nascimento:
          <input type='date' 
          name='dataNascimento'
          value={formDataAluno.dataNascimento} 
          onChange={handleInputChangeAluno} 
          />
        </label>
        <br />
        <label>
          CPF:
          <input type='text' 
          name='cpf' 
          value={formDataAluno.cpf} 
          onChange={handleInputChangeAluno} 
          placeholder="CPF" 
          />
        </label>
        <br />
        <label>
          RG:
          <input type='text' 
          name='rg' 
          value={formDataAluno.rg} 
          onChange={handleInputChangeAluno} 
          placeholder="RG" 
          />
        </label>
        <br />
        <label>
          Nome do Pai:
          <input type='text' 
          name='nomePai' 
          value={formDataAluno.nomePai} 
          onChange={handleInputChangeAluno} 
          placeholder="Nome do Pai" 
          />
        </label>
        <br />
        <label>
          Nome da Mãe:
          <input type='text' 
          name='nomeMae' 
          value={formDataAluno.nomeMae} 
          onChange={handleInputChangeAluno} 
          placeholder="Nome da Mãe" 
          />
        </label>
        <br />
        <label>
          Nome do Responsável:
          <input type='text' 
          name='nomeResponsavel' 
          value={formDataAluno.nomeResponsavel} 
          onChange={handleInputChangeAluno} 
          placeholder="Nome do Responsável" 
          />
        </label>

        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroAluno;