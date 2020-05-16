import styled from 'styled-components'
import { theme } from '../../../theme'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 16px 8px;
`
export const DataContainer = styled.div`
  width: 45%;
  display: flex;
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
      text-align: center;
    }
  }
`

export const TypeContainer = styled.div`
  div {
    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid ${theme.color.lightGray};

    h2 {
      font-size: 16px;
      font-weight: normal;
      text-align: center;
    }
  }
`

export const MessageContainer = styled.div`
  div {
      width: 220px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid ${theme.color.lightGray};

      h2 {
        font-size: 16px;
        font-weight: normal;
        text-align: center;
      }
    }
`

export const CheckBoxContainer = styled.div`
  div {
      width: 95px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid ${theme.color.lightGray};

      h2 {
        font-size: 16px;
        font-weight: normal;
        text-align: center;
      }
    }
`

export const SendContainer  = styled.div`
  div {
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid ${theme.color.lightGray};

      h2 {
        font-size: 16px;
        font-weight: normal;
        text-align: center;
      }
    }
`
