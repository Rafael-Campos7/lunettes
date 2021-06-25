import styled from "styled-components";

export const Container = styled.div`
  h3 {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  table {
    border-spacing: 0;
    width: 100%;

    tr {
      display: flex;
      margin-bottom: 20px;
      font-size: 16px;

      & td:nth-child(1) {
        font-weight: bold;
        width: 50%;
      }

      & td:nth-child(2) {
        color: var(--gray-200);
      }
    }
  }

  @media screen and (max-width: 720px) {
    h3 {
      font-size: 18px;
    }

    table {
      tr {  
        font-size: 14px;
      }
    }
  }
`