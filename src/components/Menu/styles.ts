import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 30px;
    margin-bottom: 30px;

    button {
      background: none;
      border: none;
      width: 30px;
      height: 30px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  img {
    width: 200px;
    height: 89px;
  }
  
`