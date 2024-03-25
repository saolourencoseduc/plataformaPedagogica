import React, { useState } from 'react';
import './CadastroAluno.css';

const CadastroAluno = () => {
  const [formDataAluno, setFormDataAluno] = useState({
    codigoAluno: '',
    codigoInep: '',
    raAluno: '',
    nomeAluno: '',
    dataNascimento: '',
    cpf: '',
    rg: '',
    ano: '',
    nomePai: '',
    nomeMae: '',
    nomeResponsavel: ''
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChangeAluno = (e) => {
    const { name, value } = e.target;
    let inputPonto = value;

    switch (name) {
      case 'cpf':
        inputPonto = value
          .slice(0, 14)
          .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        break;
      case 'rg':
        inputPonto = value
          .slice(0, 10)
          .replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3');
        break;
      default:
        inputPonto = value.slice(0, 50);
        break;
    }

    setFormDataAluno({ ...formDataAluno, [name]: inputPonto });

    if (formSubmitted) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmitAluno = (e) => {
    e.preventDefault();
    const validationErrors = {};
    Object.keys(formDataAluno).forEach(key => {
      if (!formDataAluno[key]) {
        validationErrors[key] = 'Este campo é obrigatório';
      }
    });
    setErrors(validationErrors);
    setFormSubmitted(true);

    if (Object.keys(validationErrors).length === 0) {
      
      // aqui vou colocar a logica quando receber a api
      console.log('Dados do formulário aluno:', formDataAluno);

      setFormDataAluno({
        codigoAluno: '',
        codigoInep: '',
        raAluno: '',
        nomeAluno: '',
        dataNascimento: '',
        cpf: '',
        rg: '',
        ano: '',
        nomePai: '',
        nomeMae: '',
        nomeResponsavel: ''
      });
      setFormSubmitted(false);
    }
  };

  const inputStyle = (error) => ({
    border: error ? '2px solid red' : '1px solid black'
  });

  return (
    <div className='CadastroAluno'>
      <h1>Cadastro Aluno</h1>

      <form onSubmit={handleSubmitAluno}>
        <label>
          Código Aluno:
          <input style={inputStyle(errors.codigoAluno)} type='text' name='codigoAluno' value={formDataAluno.codigoAluno} onChange={handleInputChangeAluno} placeholder="Código Aluno" />
          {errors.codigoAluno && <span className='error-msg'>{errors.codigoAluno}</span>}
        </label>
        <br />

        <label>
          Código INEP:
          <input style={inputStyle(errors.codigoInep)} type='text' name='codigoInep' value={formDataAluno.codigoInep} onChange={handleInputChangeAluno} placeholder="Código INEP" />
          {errors.codigoInep && <span className='error-msg'>{errors.codigoInep}</span>}
        </label>
        <br />

        <label>
          RA Aluno:
          <input style={inputStyle(errors.raAluno)} type='text' name='raAluno' value={formDataAluno.raAluno} onChange={handleInputChangeAluno} placeholder="RA Aluno" />
          {errors.raAluno && <span className='error-msg'>{errors.raAluno}</span>}
        </label>
        <br />

        <label>
          Nome Aluno:
          <input style={inputStyle(errors.nomeAluno)} type='text' name='nomeAluno' value={formDataAluno.nomeAluno} onChange={handleInputChangeAluno} placeholder="Nome Aluno" />
          {errors.nomeAluno && <span className='error-msg'>{errors.nomeAluno}</span>}
        </label>
        <br />

        <label>
          Data de Nascimento:
          <input style={inputStyle(errors.dataNascimento)} type='date' name='dataNascimento' value={formDataAluno.dataNascimento} onChange={handleInputChangeAluno} />
          {errors.dataNascimento && <span className='error-msg'>{errors.dataNascimento}</span>}
        </label>
        <br />

        <label>
          CPF:
          <input style={inputStyle(errors.cpf)} type='text' name='cpf' value={formDataAluno.cpf} onChange={handleInputChangeAluno} placeholder="CPF" />
          {errors.cpf && <span className='error-msg'>{errors.cpf}</span>}
        </label>
        <br />

        <label>
          RG:
          <input style={inputStyle(errors.rg)} type='text' name='rg' value={formDataAluno.rg} onChange={handleInputChangeAluno} placeholder="RG" />
          {errors.rg && <span className='error-msg'>{errors.rg}</span>}
        </label>
        <br />

        <label>
          Ano:
          <input style={inputStyle(errors.ano)} type='text' name='ano' value={formDataAluno.ano} onChange={handleInputChangeAluno} placeholder="Ano" />
          {errors.ano && <span className='error-msg'>{errors.ano}</span>}
        </label>
        <br />

        <label>
          Nome do Pai:
          <input style={inputStyle(errors.nomePai)} type='text' name='nomePai' value={formDataAluno.nomePai} onChange={handleInputChangeAluno} placeholder="Nome do Pai" />
          {errors.nomePai && <span className='error-msg'>{errors.nomePai}</span>}
        </label>
        <br />

        <label>
          Nome da Mãe:
          <input style={inputStyle(errors.nomeMae)} type='text' name='nomeMae' value={formDataAluno.nomeMae} onChange={handleInputChangeAluno} placeholder="Nome da Mãe" />
          {errors.nomeMae && <span className='error-msg'>{errors.nomeMae}</span>}
        </label>
        <br />

        <label>
          Nome do Responsável:
          <input style={inputStyle(errors.nomeResponsavel)} type='text' name='nomeResponsavel' value={formDataAluno.nomeResponsavel} onChange={handleInputChangeAluno} placeholder="Nome do Responsável" />
          {errors.nomeResponsavel && <span className='error-msg'>{errors.nomeResponsavel}</span>}
        </label>
        <br />

        <button type='submit'>Cadastrar</button>

      </form>

    </div>
  );
};

export default CadastroAluno;