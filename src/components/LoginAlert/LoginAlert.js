import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const LoginAlert = () => {
  const history = useHistory();
  return (
    <Container>
      <h1>Seu Login Expirou</h1>
      <h2>Por favor faça o login novamente para continuar navegando</h2>
      <button onClick={() => history.push('/') }>Ir para o Login</button>
    </Container>
  );
}

export default LoginAlert;