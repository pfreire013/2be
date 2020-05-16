import React from 'react';

import { Container, Header, DataContainer, TypeContainer, MessageContainer, CheckBoxContainer, SendContainer } from './styles';

function ReceivedPrimary() {
  return (
    <Container>
      <Header>
        <DataContainer>
          <h2>Dados Mensagem</h2>
        </DataContainer>
        <TypeContainer>
          <h2>
            Tipo
          </h2>
          <select>
            <option value="text">Texto</option>
            <option value="image">Imagem</option>
            <option selected value="video">Video</option>
            <option value="audio">Audio</option>
            <option value="document">Documento</option>
          </select>
        </TypeContainer>
        <MessageContainer>
          <h2>
            Mensagem
          </h2>
          <input 
            placeholder='Texto'
          />
        </MessageContainer>
        <CheckBoxContainer>
          <input 
          name="checkAll"
          type="checkbox"
          />
        </CheckBoxContainer>
        <SendContainer>
          <button />
        </SendContainer>
      </Header>
    </Container>
  );
}

export default ReceivedPrimary;