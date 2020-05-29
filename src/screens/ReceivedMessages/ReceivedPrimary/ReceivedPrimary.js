import React, { useState } from 'react';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactFileReader from 'react-file-reader'
import Lottie from 'react-lottie'
import animationData from '../../../assets/loading.json'


import { Container, Header, DataContainer, TypeContainer, MessageContainer, CheckBoxContainer, AnexoButton, SendContainer, SendDropdown, AnexoContainer, ContactList } from './styles';
import { theme } from '../../../theme';
import { modelarMensagem } from '../../../services/GeradorMensagemServico';



function ReceivedPrimary({ data, token, setCelularesCSV, celularesCSV }) {
  const [type, setType] = useState('text')
  const [message, setMessage] = useState('')
  const [sendOption, setSendOption] = useState('0')
  const [fileCSV, setFileCSV] = useState()
  const [sendSuccess, setSendSuccess] = useState()

  const enviarMensagens = async () => {
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

      mensagens = []

      let res = await fetch('http://34.217.148.38/mensagem/', detalhesChamada);
      if (!res.ok) {
          let erro = await res.json();
          throw new Error(erro);
      }
      else {
          let dados = await res.json();
          setSendSuccess(dados)
          alert('Mensagens enviadas com sucesso')
          return dados;
      }
    }
  }

  const enviarMensagensCSV = async () => {
    if(!fileCSV){
      alert('Sem anexo csv')
      return
    }

    console.log('celularesCSV', celularesCSV.length)

    let arrayCelularString = celularesCSV.map(celularCSV => celularCSV.toString())

    console.log('arrayCelularString', arrayCelularString.length)

    // let mensagens = []
    //  for(let i = 0; i < celularesCSV.length ; i++){
    //   let mensagem = {
    //      tipo: 'texto',
    //      celular: arrayCelularString[i],
    //      text: message
    //    }
    //    mensagens.push(mensagem)
    //  }

    // console.log('mensagens', mensagens)


     let divididoPor200 = arrayCelularString.length < 200 ? 1 :  arrayCelularString.length / 200
     console.log('divididoPor200', divididoPor200)
     let restoDivisao = arrayCelularString.length % 200
     console.log('restoDivisao', restoDivisao)

    let mensagens = []
    let arrayIndex = 0
    for(let count = 1; count <= Math.ceil(divididoPor200); count++){
    console.log('first for')
       for(let i = 0; i <= 199; i++){
       console.log('secound for')
           let mensagem = {
             tipo: 'text',
             celular: arrayCelularString[arrayIndex],
             texto: message
           }
           mensagens.push(mensagem)
           arrayIndex++
       }
      }

     console.log('mensagens', mensagens)


       let filterMensagens = mensagens.filter(mensagem => {
         if(mensagem.celular !== undefined && mensagem.celular !== '') {
           return mensagem
         }
       })

     console.log('filterMensagens', filterMensagens)

    let dados = {
      dados: filterMensagens
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
        console.log(dados)
        setSendSuccess(dados)
        alert('Mensagens enviadas com sucesso')
        return dados;
    }
  }


  const handleFiles = files => {
    setFileCSV(files)
    var reader = new FileReader();
    let celulares = []
    reader.onload = function(e) {
        // Use reader.result
        let lines = reader.result.split(/\r?\n/)
        lines.map(line => {
          celulares.push(line.split(',', 1))
        })
        setCelularesCSV(celulares)
        console.log(celulares)
    }
  
    reader.readAsText(files[0]);
    console.log(fileCSV)
  }

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

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
        <SendDropdown>
            <h2>Tipo do envio</h2>
            <select onChange={e => setSendOption(e.target.value)} >
              <option value="0">Utilizar optins cadastrados</option>
              <option value="1">Utilizar optins personalizados</option>
            </select>
          </SendDropdown>
          <AnexoContainer>
            {
              sendOption === '0' ? (
                <div>
                  <AnexoButton className='btn'>Anexar CSV</AnexoButton>
                </div>
              ) : (
              <div>
                <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
                  <AnexoButton className='btn' active>Anexar CSV</AnexoButton>
                </ReactFileReader>
                {
                  fileCSV ? <h2>{fileCSV.name}</h2> : null
                }
              </div>  
              )
            }
      </AnexoContainer>
        {/* <CheckBoxContainer>
          <h2>Check</h2>
          <input 
          name="checkAll"
          type="checkbox"
          onClick={() => setCheckedAll(!checkedAll)}
          />
        </CheckBoxContainer> */}
        <SendContainer>
          <button onClick={sendOption === '0' ? () => enviarMensagens() : () => enviarMensagensCSV()}>
            <FontAwesomeIcon icon={faPaperPlane} color={theme.color.white} size='lg'/>
          </button>
        </SendContainer>
      </Header>
      <ContactList>
        <ul>
        {
          celularesCSV && <li>Contatos</li>
        }
        {
          celularesCSV ? celularesCSV.map(celular => {
            return (
              <li key={celular}>
                <h2>{celular}</h2>
              </li>
            )
          }) : 
            null
            // <Lottie 
            //   options={defaultOptions}
            //   height={400}
            //   width={400}
            // />
        }
        </ul>
      </ContactList>
    </Container>
  );
}

export default ReceivedPrimary;