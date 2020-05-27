import React, { useEffect, useState } from 'react';
import ReceivedPrimary from './ReceivedPrimary'
import ReceivedList from './ReceivedList'
import ReceivedListHeader from './ReceivedListHeader'
import { url_api, autenticar } from '../../services/ApiServico'
import Lottie from 'react-lottie'
import animationData from '../../assets/loading.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import { Container, Logout, LoginAlertContainer, ReloadButton, ReloadContainer, SearchContainer } from './styles';
import { obterMensagens } from '../../services/MensagemServico';
import NavBar from '../../components/NavBar/Navbar';
import { obterTokenUsuario, logout } from '../../services/Autenticacao';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import LoginAlert from '../../components/LoginAlert';
import { theme } from '../../theme';

function ReceivedMessages() {
  const [token, setToken] = useState()
  const [tokenExpired, setTokenExpired] = useState(false)
  const [respostas, setRespostas] = useState()
  const [checkedAll, setCheckedAll] = useState()
  const [search, setSearch] = useState()
  const [searchData, setSearchData] = useState()
  const [enviadasId, setEnviadasId] = useState()
  const history = useHistory()

  useEffect(() => {
    let _token = obterTokenUsuario()
    setToken(_token)
    refreshLocalStorare()
  },[])

  useEffect(() => {
    if(token === undefined){
      setTokenExpired(true)
    }
    if(token){
      setTokenExpired(false)
      obterRespostas()
    }
  }, [token])

  const refreshLocalStorare = () => {
    let localDataString = localStorage.getItem('enviadas')
    let localDataArray = localDataString.split(',')
    setEnviadasId(localDataArray)
  }

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
        timeValidate(dados)
        return dados;
    }
}

const timeValidate = (data) => {
  let limitTime = moment().subtract(1, 'day').valueOf()
  const dataTimeValidate = data.filter(d => {
    let dataTime = moment.utc(d.processada, 'DD-MM-YYYYTHH:mm:ss:SSSSSS').valueOf()
    let isInTime = limitTime < dataTime
    if(isInTime){
      return d
    }
  })
  idValidate(dataTimeValidate)
}

const idValidate = (data) => {
  refreshLocalStorare()
  let found = data.filter(d => enviadasId.some(envId => envId === d._id))
  found.map(f => data.splice(data.indexOf(f), 1))
  setRespostas(data)
}

const handleLogout = () => {
  logout()
  history.push('/');
}

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

  const reloadList = () => {
    setRespostas()
    obterRespostas()
  }

  const handleSearch = () => {
    let res = respostas.filter(resposta => {
      return resposta.celular.includes(search)
    })

    setSearchData(res)
  }
  

  return (
    <>
    <NavBar  index={2}/>
    {
      tokenExpired ? (
        <LoginAlertContainer>
          <LoginAlert/>
        </LoginAlertContainer>
      ) : (
        <Container>
          <ReceivedPrimary data={respostas} token={token} setCheckedAll={setCheckedAll} checkedAll={checkedAll} />
          {
            respostas ? (
              <>
              <ReloadContainer>
                <SearchContainer>
                  <input 
                    placeholder='Pesquisar telefone'
                    onChange={e => setSearch(e.target.value)}
                  />
                  <button onClick={() => handleSearch()}>
                    <FontAwesomeIcon icon={faSearch} color={theme.color.white} size='lg'/>
                  </button>
                </SearchContainer>
                <ReloadButton onClick={() => reloadList()}>Atualizar Lista</ReloadButton>
              </ReloadContainer>
              <ReceivedListHeader />
              </>
            ) : (
              <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
              />
            )
          }
          {
            searchData ? 
              searchData?.map(d => <ReceivedList key={d._id} data={d} token={token}/>) 
              :
              respostas?.map(d => <ReceivedList key={d._id} data={d} token={token}/>)
          }
          {/* <PaginationContainer>
            <button >{'<'}</button>
            <h2>1</h2>
            <button >{'>'}</button>
          </PaginationContainer> */}
          <Logout onClick={handleLogout}>Sair</Logout>
        </Container>
      )
    }
    </>
  );
}

export default ReceivedMessages;


