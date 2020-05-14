import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Title, LoginContainer, InputName, InputPassword, LoginButton, ButtonText } from './styles';

function Login() {
  return (
    <Container>
        <LoginContainer>
          <Title>Login</Title>
          <InputName />
          <InputPassword />
          <LoginButton>
            <ButtonText>Entrar</ButtonText>
          </LoginButton>
          <Link to='/home'>Home</Link>
        </LoginContainer>
    </Container>
  );
}

export default Login;