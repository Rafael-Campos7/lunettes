import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ProductInformation = styled.div`
  display: grid;
  grid-template-columns: 480px 1fr;
  grid-template-rows: 1fr;
  gap: 55px;
  width: 1260px;
  margin: 80px 0px;
`

export const Description = styled.div`
  h3 {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: var(--gray-200);
  }
`
export const Characteristics = styled.div`
  h3 {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  table {
    tr {
      display: block;
      margin-bottom: 20px;

      & td:nth-child(1) {
        font-size: 16px;
        font-weight: bold;
        width: 350px;
      }

      & td:nth-child(2) {
        font-size: 16px;
        color: var(--gray-200);
      }
    }
  }
`