import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from './../../services/Autenticacao';

import { Container, LoginContainer } from './styles';

function Login() {
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

      try {
          console.log('entrie')
          await login(key, senha);
          history.push('/template');
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
            onChange={e => setKey(e.target.value)}
          />
          <input
            name="password" 
            type="password" 
            placeholder='Senha'
            onChange={e => setSenha(e.target.value)}
          />
            <button 
              type="button"
              onClick={logarUsuario}  
            >Entrar</button>
        </LoginContainer>
    </Container>
  );
}

export default Login;