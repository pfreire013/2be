import React, { useEffect, useState } from 'react';
import { faPaperPlane, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from 'moment'
import Modal from 'react-modal';

import { Container, DataContainer, TypeContainer, MessageContainer, CheckBoxContainer, SendContainer, SeeOldMessageButton, ModalContainer, ExternalMessage, InternalMessages, ModalSendContainer, ModalSendMessageContainer } from './styles';
import { theme } from '../../../theme';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '20px'
  }
};

function ReceivedList({ data, token }) {
  const [type, setType] = useState('text')
  const [message, setMessage] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [modalIsOpen,setIsOpen] = useState(false)
  const [oldMessages, setOldMessages] = useState()
  const [isSended,setIsSended] = useState(false)
  const [dataFuso, setDataFuso] = useState()

  useEffect(() => {
    dataUtc()
  }, [])

  function closeModal(){
    setIsOpen(false);
  }

  function openModal(){
    setIsOpen(!modalIsOpen);
    obterRespostasUsuario()
  }

  const dataUtc = () => {
   const dataUTC = moment.utc(data.processada, 'DD-MM-YYYYTHH:mm:ss:SSSSSS').valueOf()

   console.log('data._id', data._id)
   console.log('dataUTC', dataUTC)
   console.log('dataUTC ++', moment(dataUTC).utcOffset(-240).format())
   setDataFuso(moment(dataUTC).utcOffset(-240).format('DD-MM-YYYYTHH:mm:ss'))
  }

  const obterRespostasUsuario = async () => {
    let parametros = {
        celular: data.celular,
    }
    var url = new URL('http://34.217.148.38/mensagem/');
    Object.keys(parametros).forEach(key => url.searchParams.append(key, parametros[key]));
    
    let cabecalho = new Headers();
    cabecalho.append('Authorization', `Bearer ${token}`);
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
        let dadosReverse = dados.reverse()
        setOldMessages(dadosReverse)
        return dados;
    }
  }

  const enviarMensagens = async ( id, tipo, celular, text ) => {
    if(!message) {
        alert('Escreva alguma mensagem antes de enviar')
      return
    };

    let mensagem = {
        'tipo': tipo,
        'celular': celular,
        'texto': text,
    }
    let dados = {
        dados: [mensagem]
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
        setIsSended(true)
        setMessage('')
        let currentLocalStorage = []
        currentLocalStorage.push(localStorage.getItem('enviadas'))
        if(currentLocalStorage === null) {
          currentLocalStorage = []
        }
        currentLocalStorage.push(id)
        localStorage.setItem('enviadas', currentLocalStorage)
        return dados;
    }
  }

  return (
    <Container isSended={isSended}>
       <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <ModalContainer>
            {
              oldMessages?.map(oldMessage => {
                if(oldMessage.origem === 'externa') {
                  return (
                    <ExternalMessage>
                      <h2>{oldMessage.texto}</h2>
                      <h2>{oldMessage.processada.substr(0, 10)}</h2>
                    </ExternalMessage>
                  )
                } else if (oldMessage.origem === 'interna') {
                  return (
                    <InternalMessages>
                      <h2>{oldMessage.texto}</h2>
                    </InternalMessages>
                  )
                }
              })
            }
            <ModalSendMessageContainer>
              <textarea 
                placeholder='Texto'
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={5}
              />
              <ModalSendContainer>
                <button onClick={() => enviarMensagens(data._id, type, data.celular, message)}>
                  <FontAwesomeIcon icon={faPaperPlane} color={theme.color.white} size='lg'/>
                </button>
              </ModalSendContainer>
            </ModalSendMessageContainer>
            {
              isSended && <span>Mensagem enviada com sucesso!</span>
            }
          </ModalContainer>
        </Modal>
      <DataContainer>
        <div>
          <h2>{data.celular}</h2>
        </div>
        <div>
          <h2>{data.origem}</h2>
        </div>
        {/* <div>
          <h2>{data.tipo}</h2>
        </div> */}
        <div>
          <h2>{data.texto}</h2>
        </div>
        <div>
          <h2>{dataFuso?.substr(0, 10)}</h2>
          <h2>{dataFuso?.substr(11, 5)}</h2>
        </div>
      </DataContainer>
      <SeeOldMessageButton onClick={() => openModal()}>
        <FontAwesomeIcon icon={faEye} color={theme.color.blue} size='2x'/>
      </SeeOldMessageButton>
      {/* <TypeContainer>
        <select onChange={e => setType(e.target.value)}>
          <option selected value="text">Texto</option>
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
          <button onClick={() => enviarMensagens(type, data.celular, message)}>
            <FontAwesomeIcon icon={faPaperPlane} color={theme.color.white} size='lg'/>
          </button>
        </SendContainer> */}
    </Container>
  );
}

export default ReceivedList;