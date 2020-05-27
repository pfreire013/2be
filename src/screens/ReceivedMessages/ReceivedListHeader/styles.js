import styled from 'styled-components'
import { theme } from '../../../theme'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 80px;
  padding: 0 8px;
`
export const DataContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;

  div:nth-child(1n) {
    width: 22%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(2n) {
    width: 20%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(3n) {
    width: 15%;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(4n) {
    width: 25%;
  }

  div:nth-child(5n) {
    width: 10%;
  }

    h2 {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }
`


export const TypeContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }
`

export const MessageContainer = styled.div`
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
      
      h2 {
        font-size: 16px;
      font-weight: bold;
      text-align: center;
      }
`

export const CheckBoxContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
      

      h2 {
        font-size: 16px;
      font-weight: bold;
      text-align: center;
      }
`

export const SendContainer  = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
     

      h2 {
        font-size: 16px;
      font-weight: bold;
      text-align: center;
      }
`
