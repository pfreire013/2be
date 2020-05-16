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
        <div>
          <h2>Tipo</h2>
        </div>
      </TypeContainer>
      <MessageContainer>
        <div>
          <h2>Mensagem</h2>
        </div>
      </MessageContainer>
      <CheckBoxContainer>
        <div>
          <h2>Check</h2>
        </div>
      </CheckBoxContainer>
      <SendContainer>
        <div>
          <h2>Enviar</h2>
        </div>
      </SendContainer>
    </Container>
  );
}

export default ReceivedListHeader;