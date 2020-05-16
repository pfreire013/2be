import styled from 'styled-components'
import { theme } from '../../../theme'

export const Container = styled.div`
  max-width: 1000px;
  background: ${theme.color.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 100px;
  padding:  8px 16px 8px 16px;
  margin-bottom: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  `

export const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 8px;
`

export const DataContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center; 

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
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  flex-direction: column;
  padding: 0 8px;
  
  h2 {
    font-size: 20px;
    color: #000;
    text-align: center;
    font-weight: normal;
    margin-bottom: 8px;
    }

  input {
    border: 1px solid ${theme.color.lightGray};
    height: 50px;
    width: 100%;
    padding: 8px;
  }
`

export const CheckBoxContainer = styled.div`
  width: 5%;
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
    background: ${theme.color.green};
  }

`