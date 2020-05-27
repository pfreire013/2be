import styled from 'styled-components'
import { theme } from '../../../theme'
 
export const Container = styled.div`
  background: ${props => props.isSended ? theme.color.Gray : theme.color.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  padding:  8px 16px 8px 16px;
  margin: 8px 80px;
  color: ${props => props.isSended ? theme.color.white : theme.color.black};
`

export const DataContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  div:nth-child(1n) {
    width: 23%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(2n) {
    width: 15%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(3n) {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(4n) {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(5n) {
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    padding: 0 8px;
 
    border-right: 1px solid ${theme.color.lightGray};

    h2 {
      font-size: 16px;
      font-weight: normal;
      text-align: center;
    }
  }
`

export const TypeContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  select {
    height: 40px;
    width: 80%;
    background: ${theme.color.lightGray};
    font-size: 16px;
  }
`

export const MessageContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    border: 1px solid ${theme.color.lightGray};
    height: 50px;
    width: 90%;
    padding: 8px;
  }
`

export const CheckBoxContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  input[type="checkbox"] {
    font-size: 30px;
  }
`

export const SendContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border: none;
    background: ${theme.color.green};
  }
`

export const SeeOldMessageButton = styled.button`
  background: none;
  border: none;
  padding: 0 8px;
`

export const ModalContainer = styled.div`
  min-width: 300px;
  max-width: 400px;
  max-height: 500px;
  background: ${theme.color.white};
  overflow-y: scroll;

  span {
    color: ${theme.color.green};
    font-size: 14px;
  }
`

export const ExternalMessage = styled.div`
  background: ${theme.color.lightGray};
  border-radius: 10px;
  padding: 12px 8px;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h2 {
    width:70%;
    color: ${theme.color.black};
    font-size: 16px;
    font-weight: normal;
  }

  h2:nth-child(2n) {
    width: 90px;
    margin-left: 12px;
  }
`

export const InternalMessages = styled.div`
  background: ${theme.color.green};
  border-radius: 10px;
  padding: 12px 8px;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h2 {
    color: ${theme.color.white};
    text-align: right;
    font-size: 16px;
    font-weight: normal;
  }
`


export const ModalSendMessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px; 

  textarea {
    border: 1px solid ${theme.color.lightGray};
    height: 70px;
    width: 80%;
    padding: 8px;
    font-size: 16px;
  }
`

export const ModalSendContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border: none;
    background: ${theme.color.green};
  }
`