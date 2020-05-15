import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  background: ${theme.color.white};
  border-radius: 20px;
  max-width: 700px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 24px;
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 20px;
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
  }
`

export const TemplateContainer = styled.div`
  display: flex;
  background: ${theme.color.white};
  height: 150px;
  width: 80%;
  border: 2px solid ${theme.color.lightGray};
  border-radius: 20px;
  margin-bottom: 40px;
`

export const TableContaier = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  margin-top: 20px;

  thead {
    input {
      font-size: 20px;
    }
  
    tr {
      background: ${theme.color.lightGray};
      height: 40px;
      margin: 0;
    }
  }
`

export const TableBody = styled.tr`
  height: 50px;
  margin: 0;
  border-bottom: 1px solid ${theme.color.lightGray};

  input {
    font-size: 20px;
  }
  
  td {
    text-align: center;
  }
`