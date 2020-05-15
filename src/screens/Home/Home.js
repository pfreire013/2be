import React from 'react';

import { Container, Title, TemplateContainer, TableHeader, TableBody, Subtille, TableContaier, ContactsContainer } from './styles';

function Home() {
  return (
    <Container>
      <Title>Template</Title>
      <TemplateContainer />
      <Subtille>Contatos</Subtille>
      <TableContaier>
        <TableHeader>
          <tr>
            <th>
            <input
              name="isGoing"
              type="checkbox"
            />
            </th>
            <th scope="col">ID</th>
            <th scope="col">Origem</th>
            <th scope="col">Celular</th>
            <th scope="col">Gerada</th>
            <th scope="col">Processada</th>
            <th scope="col">Status</th>
          </tr>
        </TableHeader>
        <TableBody>
          <td>
          <input
            name="isGoing"
            type="checkbox"
          />
          </td>
          <td>0000000</td>
          <td>Interna</td>
          <td>(13)996648775</td>
          <td>01/03/2020</td>
          <td>03/03/2020</td>
          <td>Enviada</td>
        </TableBody>
        <TableBody>
          <td>
          <input
            name="isGoing"
            type="checkbox"
          />
          </td>
          <td>0000000</td>
          <td>Interna</td>
          <td>(13)996648775</td>
          <td>01/03/2020</td>
          <td>03/03/2020</td>
          <td>Enviada</td>
        </TableBody>
      </TableContaier>

    </Container>
  );
}

export default Home;