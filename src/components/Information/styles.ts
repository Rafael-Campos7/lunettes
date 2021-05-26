import styled from "styled-components";

export const Container = styled.section`
  background: var(--gray-100);
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    text-transform: uppercase;
    font-family: "Monument";
    font-size: 42px;
    line-height: 51px;
  }

  a {
    margin-top: 20px;
    padding: 5px 10px;
    border-radius: 4px;
    text-decoration: none;
    transition: background 0.2s ease 0s;
    border: 1px solid var(--gray-200);
    color: var(--gray-200);

    &:hover {
      background: #000000;
      color: #FFFFFF;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 768px;
    margin-top: 40px;

    div {
      margin: 0;
      display: flex;
      flex-flow: column nowrap;
      place-items: center baseline;
      flex: 1 1 0%;

      img {
        width: 70px;
        height: 70px;
      }

      h4 {
        font-weight: 900;
        text-transform: uppercase;
        font-size: 24px;
        margin: 40px 0px;
      }

      p{
        width: 80%;
        font-size: 16px;
        text-align: center;
        color: var(--gray-200);
      }
    }
  }
`