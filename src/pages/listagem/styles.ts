import styled from "styled-components";

export const Container = styled.section`

`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 80px;
  width: 1260px;

  @media screen and (max-width: 1300px) {
    gap:  80px 60px;
    width: auto;
  }

  @media screen and (max-width: 1048px) {
    gap:  80px 40px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap:  80px 0px;
  }
`