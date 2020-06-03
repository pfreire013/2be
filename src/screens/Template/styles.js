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
  margin-bottom: 20px;
  margin-top: 40px;
  padding: 20px;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 16px;
    font-weight: normal;
  }

`

export const TemplateOpitionContainer = styled.div`
  width: 80%;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
     div{
      opacity: ${props => props.show ? 0 : 1};
      padding-left: 8px;
      margin: 8px 0;
      

        h2 {
          font-size: 14px;
          font-weight: normal;
        }
     }
  }
`

export const DropdownOpition = styled.button`
  width: 100%;
  border: none;
  border-bottom: 2px solid ${theme.color.lightGray};
  padding-bottom: 8px;
  display: flex;
  align-items: flex-start;
`

export const OptionContainer = styled.button`
  background: none;
  border: none;
  padding: 8px;

  h2 {
        font-size: 16px;
        font-weight: normal;
      }
`

export const SendDropdown = styled.div`
  width: 80%;
  border-bottom: 2px solid ${theme.color.lightGray};
  padding-bottom: 20px;
  margin-bottom: 20px;

  h2 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 12px;
      }

  select {
    height: 40px;
    width: 50%;
    background: ${theme.color.lightGray};
    font-size: 16px;
  }
`

export const FooterContainer = styled.div`

  div {
    display: flex;
  }
  
  button:nth-child(1n) {
    background: ${theme.color.green};
    margin-right: 12px;
  }

  button:nth-child(2n) {
    background: ${theme.color.blue};
  }

  button {
    height: 40px;
    padding: 8px;
    border: none;
    border-radius: 5px;
    color: ${theme.color.white};
  }
`

export const ListContacts = styled.div`
  width: 80%;

  ul {
    width: 100%;
    list-style-type: none;

    li:first-child {
      border-bottom: 2px solid ${theme.color.lightGray};
      padding-bottom: 8px;

      h2 {
        font-size: 16px;
        font-weight: bold;
      }
    }

    li:nth-child(even) {
      background: ${theme.color.lightGray};
    }

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 8px;

      h2 {
        font-size: 16px;
        font-weight: normal;
      }
    }
  }

`

export const LogoutContainer = styled.div`
  position: absolute;
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
