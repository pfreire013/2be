import styled from 'styled-components'
import { theme } from '../../../theme'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 80px;
  padding: 0 8px;
`
export const DataContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  div:nth-child(1n) {
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(2n) {
    width: 85px;
  }

  div:nth-child(3n) {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(4n) {
    width: 250px;
  }

  div:nth-child(5n) {
    width: 120px;
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
