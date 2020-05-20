import styled from  'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: ${theme.color.white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  div{
    width: 80%;
    max-width: 700px;
    display: flex;
    flex-direction: row;
  }
`

export const NavButton = styled.button`
  background: none;
  border: none;
  margin-right: 40px;

  h2{
        font-size: 18px;
        font-weight: ${props => props.select ? 'bold' : 'normal' };
      }
`