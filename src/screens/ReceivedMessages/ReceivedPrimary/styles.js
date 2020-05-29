import styled from 'styled-components'
import { theme } from '../../../theme'

export const Container = styled.div`
  background: ${theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  padding:  8px 16px 8px 16px;
  margin: 8px 80px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  margin-top: 40px;
  `

export const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 8px;
`

export const DataContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center; 
  border-right: 1px solid ${theme.color.lightGray};

  h2 {
    font-size: 20px;
    color: #000;
    text-align: center;
    font-weight: normal;
  }
`

export const TypeContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  flex-direction: column;
  padding: 0 8px;
  border-right: 1px solid ${theme.color.lightGray};


  h2 {
    font-size: 20px;
    color: #000;
    text-align: center;
    font-weight: normal;
    margin-bottom: 8px;
    }

  select {
    height: 40px;
    width: 90%;
    background: ${theme.color.lightGray};
    font-size: 16px;
  }
`

export const MessageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  flex-direction: column;
  padding: 0 8px;
  border-right: 1px solid ${theme.color.lightGray};

  
  h2 {
    font-size: 20px;
    color: #000;
    text-align: center;
    font-weight: normal;
    margin-bottom: 8px;
    }

  textarea {
    border: 1px solid ${theme.color.lightGray};
    height: 70px;
    width: 90%;
    padding: 8px;
    font-size: 16px;
    margin: 0 20px;
  }
`

export const CheckBoxContainer = styled.div`
  width: 7%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; 
  border-right: 1px solid ${theme.color.lightGray};

  h2 {
    font-size: 20px;
    color: #000;
    text-align: center;
    font-weight: normal;
    margin-bottom: 30%;
    }


  input[type="checkbox"] {
    font-size: 30px;
  }
`

export const SendContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 20px;
    color: #000;
    text-align: center;
    font-weight: normal;
    margin-bottom: 30%;
    }

  button {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background: ${theme.color.green};
    display: flex;
    justify-content: center;
    align-items: center;
  }

`

export const SendDropdown = styled.div`
  width: 30%;
  padding-bottom: 20px;
  margin-bottom: 20px;
  padding: 0 8px;

  h2 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 12px;
      }

  select {
    height: 40px;
    width: 80%;
    background: ${theme.color.lightGray};
    font-size: 16px;
    margin: 0 20px;

  }
`

export const AnexoContainer = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-top: 8px;
      font-size: 12px;
      font-weight: normal;
    }
  }
`

export const AnexoButton = styled.button`
  background: ${props => props.active ? theme.color.green : theme.color.lightGray};
  height: 50px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: ${theme.color.white};
  margin-top: 30%;
  cursor: ${props => props.active ? 'pointer' : 'null'};

`

export const ContactList = styled.div`
  background: ${theme.color.white};

  ul {
    width: 100%;
    list-style-type: none;

    li:first-child {
      border-bottom: 2px solid ${theme.color.black};
      padding-bottom: 8px;
      font-size: 16px;
      font-weight: bold;

      h2 {
        font-size: 16px;
        font-weight: bold;
      }
    }

    li:nth-child(even) {
      background: ${theme.color.lightGray};
    }

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 8px;

      h2 {
        font-size: 16px;
        font-weight: normal;
      }
    }
  }
`


