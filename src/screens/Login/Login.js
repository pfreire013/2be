import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Autenticacao from './../../Authentication';


import { Container, LoginContainer } from './styles';

function Login(props) {
  const [key, setKey ] = useState('')
  const [senha, setSenha ] = useState('')
  const history = useHistory();

  const commonChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
        //nao entendi o que seria isso.. mas devemos criar um use state para capturar isso
    });
  }

  const commonChangeModal = (e) => {
    this.setState({ Modal: { ...this.state.Modal, [e.target.name]: e.target.value } })
  }

  const logarUsuario = async (e) => {
      e.preventDefault();

      var _servicoAutenticacao = new Autenticacao();
      try {
          await _servicoAutenticacao.login(key, senha);
          history.push('/home');
      }
      catch (error) {
          return alert('Key ou senha inválidas')
      }
  }



  return (
    <Container>
        <LoginContainer>
          <h1>Login</h1>
          <input 
            placeholder='Usuario'
          />
          <input 
            placeholder='Senha'
          />
          <Link to="/home">
            <button type="button">Entrar</button>
          </Link>
        </LoginContainer>
    </Container>
  );
}

export default Login;