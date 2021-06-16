import styled from "styled-components";

export const Container = styled.div`
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