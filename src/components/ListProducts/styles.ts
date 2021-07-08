import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  background: #ffffff;

  & > h4 {
    font-family: 'Monument';
    font-size: 42px;
    text-align: center;
    text-transform: uppercase;
    padding: 0px 10px;
    margin-bottom: 50px;

    @media screen and (max-width: 800px) {
      font-size: 24px;
    }
  }

  & > div {
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
  }
`