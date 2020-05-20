import React from 'react';

import { Container, DataContainer, TypeContainer, MessageContainer, CheckBoxContainer, SendContainer } from './styles';

function ReceivedListHeader() {
  return (
    <Container>
      <DataContainer>
        <div>
          <h2>ID</h2>
        </div>
        <div>
          <h2>Origem</h2>
        </div>
        <div>
          <h2>Tipo</h2>
        </div>
        <div>
          <h2>Mensagem</h2>
        </div>
        <div>
          <h2>Data</h2>
        </div>
      </DataContainer>
      <TypeContainer>
          <h2>Tipo</h2>
      </TypeContainer>
      <MessageContainer>
          <h2>Mensagem</h2>
      </MessageContainer>
      <CheckBoxContainer>
          <h2>Check</h2>
      </CheckBoxContainer>
      <SendContainer>
          <h2>Enviar</h2>
      </SendContainer>
    </Container>
  );
}

export default ReceivedListHeader;