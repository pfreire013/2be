import React, { useEffect, useState } from 'react';
import ReceivedPrimary from './ReceivedPrimary'
import ReceivedList from './ReceivedList'
import ReceivedListHeader from './ReceivedListHeader'
import { url_api, autenticar } from '../../services/ApiServico';


import { Container, PaginationContainer, Logout } from './styles';
import { obterMensagens } from '../../services/MensagemServico';
import NavBar from '../../components/NavBar/Navbar';
import { obterTokenUsuario, logout } from '../../services/Autenticacao';
import { useHistory } from 'react-router-dom';

function ReceivedMessages() {
  const [token, setToken] = useState()
  const [respostas, setRespostas] = useState()
  const [checkedAll, setCheckedAll] = useState()
  const history = useHistory()

  useEffect(() => {
    let _token = obterTokenUsuario()
    setToken(_token)
  },[])

  useEffect(() => {
    if(token){
      obterRespostas()
    }
  }, [token])

  const obterRespostas = async () => {
    let parametros = {
        origem: 'externa'
    }
    var url = new URL('http://34.217.148.38/mensagem/');
    Object.keys(parametros).forEach(key => url.searchParams.append(key, parametros[key]));

    let cabecalho = new Headers();
    cabecalho.append('Authorization', `Bearer ${token}` );
    cabecalho.append('Content-Type', 'application/json');
    
    const detalhesChamada = {
        method: 'GET',
        headers: cabecalho,
    }

    let res = await fetch(url, detalhesChamada);
    
    if (!res.ok) {
        let erro = await res.json();
        throw new Error(erro);
    }
    else {
        let dados = await res.json();
        setRespostas(dados)
        console.log('dados', dados)
        return dados;
    }
}

const handleLogout = () => {
  logout()
  history.push('/');
}
  

  return (
    <>
    <NavBar  index={2}/>
    <Container>
      <ReceivedPrimary data={respostas} token={token} setCheckedAll={setCheckedAll} checkedAll={checkedAll} />
      <ReceivedListHeader />
      {
        respostas?.map(d => <ReceivedList key={d._id} data={d} token={token}/>)
      }
      {/* <PaginationContainer>
        <button >{'<'}</button>
        <h2>1</h2>
        <button >{'>'}</button>
      </PaginationContainer> */}
      <Logout onClick={handleLogout}>Sair</Logout>
    </Container>
    </>
  );
}

export default ReceivedMessages;


