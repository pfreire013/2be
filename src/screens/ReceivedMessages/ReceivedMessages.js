import React from 'react';
import ReceivedPrimary from './ReceivedPrimary'
import ReceivedList from './ReceivedList'
import ReceivedListHeader from './ReceivedListHeader'

import { Container, PaginationContainer } from './styles';

const dados = ['1', '2', '3', '4', '5']

function ReceivedMessages() {
  return (
    <Container>
      <ReceivedPrimary />
      <ReceivedListHeader />
      {
        dados.map(d => <ReceivedList key={d}/>)
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