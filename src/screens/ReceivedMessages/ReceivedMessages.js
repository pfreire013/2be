import React, { useEffect } from 'react';
import ReceivedPrimary from './ReceivedPrimary'
import ReceivedList from './ReceivedList'
import ReceivedListHeader from './ReceivedListHeader'
import { url_api, autenticar } from '../../services/ApiServico';


import { Container, PaginationContainer } from './styles';
import { obterMensagens } from '../../services/MensagemServico';

function ReceivedMessages() {
  useEffect(() => {
    getMidia()
    getMensgens()
  },[])

  const getMensgens = async () => {
    const detalhesChamada = {
      method: 'GET',
      headers: autenticar(),
    }
  
    let res = await fetch('http://34.217.148.38/mensagem/', detalhesChamada)
    console.log('mensagesn', res)
  }

  const getMidia = async () => {
    const detalhesChamada = {
      method: 'GET',
      headers: autenticar(),
    }
  
    let res = await fetch('http://34.217.148.38/midia/', detalhesChamada)
    console.log('mensagesn', res)
  }

  return (
    <Container>
      <ReceivedPrimary />
      <ReceivedListHeader />
      {
        mockMensagensResponse.dados.map(d => <ReceivedList key={d._id} data={d}/>)
      }
      <PaginationContainer>
        <button >{'<'}</button>
        <h2>1</h2>
        <button >{'>'}</button>
      </PaginationContainer>
    </Container>
  );
}

export default ReceivedMessages;


const mockMensagensResponse = {
  dados: [
    {
      _id: '17991',
      origem: 'interna',
      celular: '13996648775',
      tipo: 'text',
      texto: 'texto enviado',
      midia: {
        midia_id: 'id da mídia',
        midia_tipo:  'tipo da mídia'
      },
      template: 'Id do template',
      parametros: ['1'],
      gerada: new Date(),
      processada: new Date(),
      falha: 'string',
      enviada: new Date(),
      entregue: new Date(),
      lida: new Date()
      },
      {
        _id: '17992',
        origem: 'interna',
        celular: '13996648775',
        tipo: 'text',
        texto: 'texto enviado',
        midia: {
          midia_id: 'id da mídia',
          midia_tipo:  'tipo da mídia'
        },
        template: 'Id do template',
        parametros: ['1'],
        gerada: new Date(),
        processada: new Date(),
        falha: 'string',
        enviada: new Date(),
        entregue: new Date(),
        lida: new Date()
      },
      {
        _id: '17993',
        origem: 'interna',
        celular: '13996648775',
        tipo: 'text',
        texto: 'texto enviado',
        midia: {
          midia_id: 'id da mídia',
          midia_tipo:  'tipo da mídia'
        },
        template: 'Id do template',
        parametros: ['1'],
        gerada: new Date(),
        processada: new Date(),
        falha: 'string',
        enviada: new Date(),
        entregue: new Date(),
        lida: new Date()
      },
  ]
}