import React, { useEffect, useState } from 'react';
import { modelarMensagem } from '../../../services/GeradorMensagemServico'

import { Container, DataContainer, TypeContainer, MessageContainer, CheckBoxContainer, SendContainer } from './styles';

function ReceivedList({ data }) {
  const [type, setType] = useState()
  const [message, setMessage] = useState()
  const [isChecked, setIsChecked] = useState(false)

  const handleSend = () => {
    const template = {
        categoria: 'string',
        nome: 'string',
        conteudo: 'string',
        status: 'string'
      }
    
      const midia = ''

    modelarMensagem(data.tipo, data.celular, template, message, midia, data.parametros  )
  } 

  useEffect(() => {
    console.log('data', data)
  },[])

  return (
    <Container>
      <DataContainer>
        <div>
          <h2>{data._id}</h2>
        </div>
        <div>
          <h2>{data.origem}</h2>
        </div>
        <div>
          <h2>{data.tipo}</h2>
        </div>
        <div>
          <h2>{data.texto}</h2>
        </div>
        <div>
          <h2>03/07</h2>
        </div>
      </DataContainer>
      <TypeContainer>
        <select onChange={e => setType(e.target.value)}>
          <option selected value="Texto">Texto</option>
          <option value="Imagem">Imagem</option>
          <option value="Video">Video</option>
          <option value="Audio">Audio</option>
          <option value="Documento">Documento</option>
        </select>
      </TypeContainer>
      <MessageContainer>
        <input 
          placeholder='Texto'
          onChange={e => setMessage(e.target.value)}
        />
      </MessageContainer>
      <CheckBoxContainer>
          <input 
          name="check"
          type="checkbox"
          onClick={() => setIsChecked(!isChecked)}
          />
        </CheckBoxContainer>
        <SendContainer>
          <button/>
        </SendContainer>
    </Container>
  );
}

export default ReceivedList;