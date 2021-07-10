import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ProductInformation = styled.div`
  display: grid;
  grid-template-columns: 450px 1fr;
  grid-template-rows: 1fr;
  gap: 55px;
  width: 1260px;
  margin: 80px 0px;
  padding: 0px 20px;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }

  @media screen and (max-width: 1060px) {
    grid-template-columns: 380px 1fr;
    gap: 30px;
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    margin: 50px 0px;
  }
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

  @media screen and (max-width: 720px) {
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`