import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1000px;
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