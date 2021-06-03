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
  }

  a {
    margin-top: 20px;
    padding: 5px 10px;
    border-radius: 4px;
    text-decoration: none;
    transition:  0.2s ease 0s;
    border: 1px solid var(--gray-200);
    color: var(--gray-200);

    &:hover {
      background: #000000;
      color: #FFFFFF;
    }
  }

  & .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 768px;
    margin-top: 40px;

    div {
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

  @media screen and (max-width: 720px) {
    padding: 40px 0px;

    h3 {
      font-size: 24px;
    }

    a {
      margin-top: 15px;
      font-size: 14px;
    }

    & .container {
      margin-top: 30px;
      flex-direction: column;
      width: 100%;

      div {
        margin: 20px 0px;
      
        img {
          width: 45px;
          height: 45px;
        }

        h4 {
         margin: 15px 0px;
         font-size: 18px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
`