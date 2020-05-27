import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const LoginAlert = () => {
  const history = useHistory();
  return (
    <Container>
      <h1>Seu Login Inspirou</h1>
      <h2>Por favor faça o login novamente para continnuar navegando</h2>
      <button onClick={() => history.push('/') }>Ir para o Login</button>
    </Container>
  );
}

export default LoginAlert;