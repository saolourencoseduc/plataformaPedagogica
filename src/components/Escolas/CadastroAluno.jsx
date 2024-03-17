import { useState } from 'react';
import './CadastroAluno.css'

const CadastroAluno = () => {
  const [formDataAluno, setFormDataAluno] = useState({
    nome: '',
    cpf: '',
    escola: '',
    contato: '',
    nomeMae: '',
    nomePai: ''
  });

  const [cpfValido, setCpfValido] = useState(true);

  const handleInputChangeAluno = (e) => {
    const { name, value } = e.target;
    setFormDataAluno({ ...formDataAluno, [name]: value });

    if (name === 'cpf') {
      setCpfValido(validateCPF(value));
    }
  };

  const validateCPF = (cpf) => {
    if (!cpf || cpf.length !== 11) return false;

    if (/^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  };

  const handleSubmitAluno = (e) => {
    e.preventDefault();

    console.log('Dados do formulário aluno:', formDataAluno);

    setFormDataAluno({
      nome: '',
      cpf: '',
      escola: '',
      contato: '',
      nomeMae: '',
      nomePai: ''
    });
  };

  return (
    <div className='CadastroAluno'>
      <h1>Cadastro Aluno</h1>
      <form onSubmit={handleSubmitAluno}>
        <label>
          Nome:
          <input type='text' name='nome' value={formDataAluno.nome} onChange={handleInputChangeAluno} />
        </label>
        <br />
        <label>
          CPF:
          <input type='text' name='cpf' value={formDataAluno.cpf} onChange={handleInputChangeAluno} />
          {!cpfValido && <span style={{ color: 'red' }}>CPF inválido</span>}
        </label>
        <br />
        <label>
          Escola:
          <input type='text' name='escola' value={formDataAluno.escola} onChange={handleInputChangeAluno} />
        </label>
        <br />
        <label>
          Contato:
          <input type='text' name='contato' value={formDataAluno.contato} onChange={handleInputChangeAluno} />
        </label>
        <br />
        <label>
          Nome da Mãe:
          <input type='text' name='nomeMae' value={formDataAluno.nomeMae} onChange={handleInputChangeAluno} />
        </label>
        <br />
        <label>
          Nome do Pai:
          <input type='text' name='nomePai' value={formDataAluno.nomePai} onChange={handleInputChangeAluno} />
        </label>
        <br />
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroAluno;
