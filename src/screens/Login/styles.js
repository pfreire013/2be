import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20%;
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
  width: 300px;
  background: ${theme.color.white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputName = styled.input`
  height: 40px;
  width: 80%;
  border: 2px solid ${theme.color.lightGray};
  border-radius: 20px;
  margin-bottom: 8px;
  padding: 12px;
`

export const InputPassword = styled.input`
  height: 40px;
  width: 80%;
  border: 2px solid ${theme.color.lightGray};
  border-radius: 20px;
  padding: 12px;
`

export const LoginButton = styled.button`
  background: #73BCFF;
  border-radius: 25px;
  height: 40px;
  width: 100px;
  margin-top: 12px;
`

export const ButtonText = styled.h1`
  font-size: 16px;
  color: #FFFFFF;
  font-family: Arial, Helvetica, sans-serif;
`

