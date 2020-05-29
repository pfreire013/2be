import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  min-width: 100%;
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

export const LoginAlertContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
`

export const ReloadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 80px;
`

export const ReloadButton = styled.button`
  background: ${theme.color.blue};
  padding: 12px 20px;
  margin: 8px 0;
  color: ${theme.color.white};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  display: flex;

  input {
    width: 300px;
    border: none;
    border-radius: 10px 0 0 10px;
    padding: 0 20px;
    font-size: 18px;
  }

  button {
    background: ${theme.color.blue};
    padding: 12px 24px;
    border: none;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
  }
`

export const SkipContainer = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 20px;
  background: ${theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  h2 {
    margin: 0 12px;
  }

  h3 {
    margin: 0 12px;
    color: ${theme.color.Gray};
    opacity: 0.5
  }
`