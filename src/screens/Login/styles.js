import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 24px;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  align-self: center;
  margin-top: 12px;
  margin-bottom: 12px;
`

export const LoginContainer = styled.div`
  height: 200px;
  width: 300px;
  background: #FFFFFF;
  border: 2px solid #B3B3B3;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputName = styled.input`
  height: 40px;
  width: 80%;
  border: 2px solid ${theme.color.blue};
  border-radius: 20px;
  margin-bottom: 8px;
`

export const InputPassword = styled.input`
  height: 40px;
  width: 80%;
  border: 2px solid ${theme.color.blue};
  border-radius: 20px;
`

export const LoginButton = styled.button`
  background: #73BCFF;
  border-radius: 25px;
  height: 40px;
  width: 100px;
`

export const ButtonText = styled.h1`
  font-size: 16px;
  color: #FFFFFF;
  font-family: Arial, Helvetica, sans-serif;
`

