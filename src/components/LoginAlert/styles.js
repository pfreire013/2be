import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  height: 200px;
  width: 400px;
  background: ${theme.color.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin-top: 40px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 20px;
  }

  button {
    background: ${theme.color.red};
    padding: 12px;
    border: none;
    border-radius: 5px;
    color: ${theme.color.white};
    font-weight: bold;
    cursor: pointer;
  }
`