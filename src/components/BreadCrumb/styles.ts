import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--gray-200);

    svg {
      width: 20px; 
      height: 20px;
      margin: 0px 3px;
    }
  }  

  h2 {
    margin: 5px 0px;
    font-size: 42px;
    font-family: 'Monument';
    text-transform: uppercase;

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`