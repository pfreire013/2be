import React from 'react';

import { Container, DataContainer, TypeContainer, MessageContainer, CheckBoxContainer, SendContainer } from './styles';

function ReceivedList() {
  return (
    <Container>
      <DataContainer>
        <div>
          <h2>17991</h2>
        </div>
        <div>
          <h2>351913886</h2>
        </div>
        <div>
          <h2>Texto</h2>
        </div>
        <div>
          <h2>Ola, bom dia</h2>
        </div>
        <div>
          <h2>15/09</h2>
        </div>
      </DataContainer>
      <TypeContainer>
        <select>
          <option value="text">Texto</option>
          <option value="image">Imagem</option>
          <option selected value="video">Video</option>
          <option value="audio">Audio</option>
          <option value="document">Documento</option>
        </select>
      </TypeContainer>
      <MessageContainer>
        <input 
          placeholder='Texto'
        />
      </MessageContainer>
      <CheckBoxContainer>
          <input 
          name="check"
          type="checkbox"
          />
        </CheckBoxContainer>
        <SendContainer>
          <button/>
        </SendContainer>
    </Container>
  );
}

export default ReceivedList;