import React, { useState } from 'react';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Header, DataContainer, TypeContainer, MessageContainer, CheckBoxContainer, SendContainer } from './styles';
import { theme } from '../../../theme';



function ReceivedPrimary({ data, token, checkedAll, setCheckedAll}) {
  const [type, setType] = useState('text')
  const [message, setMessage] = useState('')

  const enviarMensagens = async () => {
    if(!checkedAll){
      alert('Check antes de enviar')
      return
    }
  
    let divididoPor200 = data.length / 200
    let restoDivisao = data.length % 200

    let mensagens = []
    let arrayIndex = 0
    for(let count = 1; count <= Math.round(divididoPor200); count++){
      for(let i = 0; i <= 199; i++){
          let mensagem = {
            tipo: type,
            celular: data[arrayIndex]?.celular,
            text: message
          }
          mensagens.push(mensagem)
          arrayIndex++
      }

      let filterMensagens = mensagens.filter(mensagem => {
        if(mensagem.celular !== undefined) {
          return mensagem
        }
      })



      let dados = {
          dados: filterMensagens
      }
      
      let cabecalho = new Headers();
      cabecalho.append('Authorization', `Bearer ${token}`);
      cabecalho.append('Content-Type', 'application/json');
      const detalhesChamada = {
          method: 'POST',
          headers: cabecalho,
          body: JSON.stringify(dados)
      }

      console.log('enviei', count + 1)
      mensagens = []

      let res = await fetch('http:4.217.148.38/mensagem/', detalhesChamada);
      if (!res.ok) {
          let erro = await res.json();
          throw new Error(erro);
      }
      else {
          let dados = await res.json();
          return dados;
      }
    }
  }

  return (
    <Container>
      <Header>
        <DataContainer>
          <h2>Enviar para todos os contatos</h2>
        </DataContainer>
        {/* <TypeContainer>
          <h2>
            Tipo
          </h2>
          <select onChange={e => setType(e.target.value)}>
            <option value="text">Texto</option>
            <option value="image">Imagem</option>
            <option selected value="video">Video</option>
            <option value="audio">Audio</option>
            <option value="document">Documento</option> 
          </select>
        </TypeContainer> */}
        <MessageContainer>
          <h2>
            Mensagem
          </h2>
          <textarea 
                placeholder='Texto'
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={5}
          />
        </MessageContainer>
        <CheckBoxContainer>
          <h2>Check</h2>
          <input 
          name="checkAll"
          type="checkbox"
          onClick={() => setCheckedAll(!checkedAll)}
          />
        </CheckBoxContainer>
        <SendContainer>
          <button onClick={() => enviarMensagens()}>
            <FontAwesomeIcon icon={faPaperPlane} color={theme.color.white} size='lg'/>
          </button>
        </SendContainer>
      </Header>
    </Container>
  );
}

export default ReceivedPrimary;