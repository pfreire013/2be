import React, { useState, useEffect, useRef } from 'react';
import ReactFileReader from 'react-file-reader'

import { Container, TemplateContainer, DropdownOpition, TemplateOpitionContainer, FooterContainer, ListContacts, OptionContainer, SendDropdown, Logout  } from './styles';
import { modelarMensagem } from '../../services/GeradorMensagemServico';
import { obterTokenUsuario, logout } from '../../services/Autenticacao';
import moment from 'moment';
import { useHistory } from 'react-router-dom';


function Template() {
  const [token, setToken] = useState()
  const [showOpiton, setShowOption] = useState(true)
  const [templates, setTemplates] = useState()
  const [selectTemplate, setSelectTemplate] = useState()
  const [celulares, setCelulares] = useState()
  const [sendSuccess, setSendSuccess] = useState()
  const [sendOption, setSendOption] = useState('0')
  const [fileCSV, setFileCSV] = useState()
  const [celularesCSV, setCelularesCSV] = useState()
  const [parametrosCSV, setParametrosCSV] = useState()
  const history = useHistory()



  const fileInputRef = useRef()


  useEffect(() => {
    let _token = obterTokenUsuario()
    setToken(_token)
  },[])

  useEffect(() => {
    if(token){
      obterTemplates()
      obterCelulares()
    }
  }, [token])

  const obterTemplates = async () => {
    let cabecalho = new Headers();
    cabecalho.append('Authorization', `Bearer ${token}` 
    );
    cabecalho.append('Content-Type', 'application/json');

    const detalhesChamada = {
        method: 'GET',
        headers: cabecalho,
    }
    let res = await fetch('http://34.217.148.38/template/', detalhesChamada);
    
    if (!res.ok) {
        let erro = await res.json();
        throw new Error(erro);
    }
    else {
        let dados = await res.json();
        console.log('dados', dados)
        setTemplates(dados)
        return dados;
    }
  }

  const obterCelulares = async () => {
    let cabecalho = new Headers();
      cabecalho.append('Authorization', `Bearer ${token}` 
      );
      cabecalho.append('Content-Type', 'application/json');

    const detalhesChamada = {
        method: 'GET',
        headers: cabecalho,
    }
    let res = await fetch('http://34.217.148.38/celular/', detalhesChamada);
    if (!res.ok) {
        let erro = await res.json();
        throw new Error(erro);
    }
    else {
        let dados = await res.json();
        setCelulares(dados)
        console.log('dados', dados)
        return dados;
    }
  }

  const enviarMensagensCSV = async () => {
    if(!fileCSV){
      alert('Sem anexo csv')
      return
    }

    if(!selectTemplate){
      alert('Sem template selecionado')
      return
    }

    let arrayCelularString = celularesCSV.map(celularCSV => celularCSV.toString())

    let mensagens = []
    for(let i = 0; i < celularesCSV.length ; i++){
      let mensagem = modelarMensagem('template', arrayCelularString[i], selectTemplate._id, selectTemplate.conteudo, [] )
      mensagens.push(mensagem)
    }

    console.log('mensagens', mensagens)

    let dados = {
      dados: mensagens
  }

    let cabecalho = new Headers();
      cabecalho.append('Authorization', `Bearer ${token}` );
      cabecalho.append('Content-Type', 'application/json');

    let detalhesChamada = { 
      method: 'POST', 
      headers: cabecalho, 
      body: JSON.stringify(dados)
    }  

    let res = await fetch('http://34.217.148.38/mensagem/', detalhesChamada);

    if (!res.ok) {
        let erro = await res.json();
        throw new Error(erro);
    }
    else {
        let dados = await res.json();
        console.log('dados', dados)
        setSendSuccess(dados)
        alert('Mensagens enviadas com sucesso')
        return dados;
    }
  }

  const enviarMensagens = async () => {
    if(!selectTemplate){
      alert('Sem template selecionado')
      return
    }

    let divididoPor200 = celulares.length / 200

    
    let mensagens = []
    for(let count = 0; count <= Math.round(divididoPor200) || 5 ; count++){
      for(let i = 0; i <= 199; i++){
        let mensagem = modelarMensagem('template', celulares[i].celular, selectTemplate._id, selectTemplate.conteudo, [] )
        mensagens.push(mensagem)
        
        let dados = {
            dados: mensagens
        }
    
        let cabecalho = new Headers();
        cabecalho.append('Authorization', `Bearer ${token}`);
        cabecalho.append('Content-Type', 'application/json');
        const detalhesChamada = {
            method: 'POST',
            headers: cabecalho,
            body: JSON.stringify(dados)
        }
        let res = await fetch('http://34.217.148.38/mensagem/', detalhesChamada);
        if (!res.ok) {
            let erro = await res.json();
            throw new Error(erro);
        }
        else {
            let dados = await res.json();
            console.log('dados', dados)
            setSendSuccess(dados)
            alert('Mensagens enviadas com sucesso')
            return dados;
        }
      }
    }

}

const handleFiles = files => {
  setFileCSV(files)
  var reader = new FileReader();
  let celulares = []
  let parametros = []
  reader.onload = function(e) {
      // Use reader.result
      let lines = reader.result.split(/\r?\n/)
      lines.map(line => {
        celulares.push(line.split(',', 1))
      })
      if(sendOption === '2'){
        lines.map(line => {
          parametros.push(line.split(/,(.+)/)[1])
        })
        console.log(parametros[0].split(','))
        setParametrosCSV(parametros)
      }
      setCelularesCSV(celulares)
  }

  reader.readAsText(files[0]);
}

const handleLogout = () => {
  logout()
  history.push('/');
}


  return (
    <Container>
      <h1>Template</h1>
      <TemplateOpitionContainer>
        <DropdownOpition onClick={() => setShowOption(!showOpiton)}>
          <h2>Templates</h2>
        </DropdownOpition>
        {
          showOpiton ? (
            <div>
              {
                templates?.map(template => {
                  return (
                    <OptionContainer onClick={() => setSelectTemplate(template)}>
                      <h2>{template.nome}</h2>
                    </OptionContainer>
                  )
                })
              }
            </div>
          ) : null
        }
      </TemplateOpitionContainer>
      <TemplateContainer>
        {
          selectTemplate && <h2>{selectTemplate.conteudo}</h2>
        }        
      </TemplateContainer>
      <SendDropdown>
        <h2>Tipo do envio</h2>
        <select onChange={e => setSendOption(e.target.value)}>
          <option selected value="0">Utilizar optins cadastrados</option>
          <option value="1">Utilizar optins personalizados</option>
          <option value="2">Template com parâmetros</option>
        </select>
      </SendDropdown>
      <FooterContainer>
        {
          sendOption === '0' ? (
            <button onClick={() => enviarMensagens()}>Enviar</button>
          ) : (
            <div>
            <button onClick={() => enviarMensagensCSV()}>Enviar</button>
            <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
              <button className='btn'>Anexar CSV</button>
            </ReactFileReader>
            {
              fileCSV && <h2>{fileCSV.name}</h2>
            }
            </div>
          )
        }
      </FooterContainer>
      <ListContacts>
        <ul>
          <li>
            <h2>Celular</h2>
            <h2>Data Aceite</h2>
          </li>
          
          {
            sendOption !== '0' ? celularesCSV?.map(celular => {
              var today = new Date();
              var dd = String(today.getDate()).padStart(2, '0');
              var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              var yyyy = today.getFullYear();

              today = mm + '/' + dd + '/' + yyyy;
              return (
                <li>
                  <h2>{celular}</h2>
                  <h2>{today}</h2>
                  {
                    parametrosCSV && parametrosCSV.map(parametroCSV => console.log(parametroCSV))
                  }
                </li>
              )
            }) : celulares?.slice(0, 199).map(({ celular, data_aceite}) => {
              return (
                <li>
                  <h2>{celular}</h2>
                  <h2>{data_aceite.substr(0, 10)}</h2>
                </li>
              )
            })
          }
        </ul>
      </ListContacts>
      <Logout onClick={handleLogout}>Sair</Logout>
    </Container>
  );
}

export default Template;