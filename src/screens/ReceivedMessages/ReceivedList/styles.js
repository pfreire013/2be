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
`

export const DataContainer = styled.div`
  max-width: 55%; 
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  div:nth-child(1n) {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(2n) {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(3n) {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(4n) {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(5n) {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    padding: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid ${theme.color.lightGray};

    h2 {
      font-size: 16px;
      font-weight: normal;
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