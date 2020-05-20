import React, { useState } from 'react';

import { Container, NavButton } from './styles';
import { useHistory } from 'react-router-dom';

function NavBar({ index }) {
  const [select, setSelect] = useState(index)
  const history = useHistory();

  const handlePress = (index) => {
    setSelect(index)
    index === 1 ? history.push('/template') : history.push('/received');
  } 



  return (
    <Container>
      <div>
        <NavButton onClick={() => handlePress(1)} select={select === 1}>
          <h2>Enviar mensagem</h2>
        </NavButton>
        <NavButton onClick={() => handlePress(2)} select={select === 2}>
          <h2>Responder mensagem</h2>
        </NavButton>
      </div>
    </Container>
  )
}

export default NavBar;