import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  margin: 80px auto;
`

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    width: 30px;
    height: 30px;
    border-radius: 20px;
  }

  h2 {
    font-size: 18px;
    margin: 0 8px;
  }
`

export const Logout = styled.button`
  height: 40px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  color: ${theme.color.white};
  background: ${theme.color.red};
  margin-top: 12px;
`