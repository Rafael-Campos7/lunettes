import styled from "styled-components";
import { footerIconAnimation } from "./animations";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2C2A40;

  & .content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 100px 0px;
    width: 980px;

    img {
     width: 138px;
     height: 61px;
    }

    h4 {
      color: #ffffff;
      font-size: 16px;
      text-transform: uppercase;
      margin-bottom: 34px;
    }

    ul {
      list-style: none;
    }

    li {
      font-size: 14px;
      color: #9a9a9a;
      margin-bottom: 10px;

      a:hover {
        text-decoration: underline;
      }
    }

    address {
      margin-bottom: 20px;
      color: #9a9a9a;
      font-style: normal;
      font-size: 14px;

      span {
        font-weight: bold;
      }

      a:hover {
        text-decoration: underline;
      }
    }

    & .social-networks {
      img {
        width: 40px;
        height: 40px;
        margin-right: 20px;

        &:hover {
          animation: 0.8s ease 0s 1 normal both running ${footerIconAnimation};
        }
      }
    }

    @media screen and (max-width: 1024px) {
      justify-content: center;
      margin: 50px 0px 0px 0px;
      padding: 0px 20px;
      width: 100%;
      
      & nav:nth-of-type(1) {
        margin-bottom: 40px;
        flex: 1 1 auto;
        width: 100%;
      }

      & nav:nth-of-type(2) {
        margin-bottom: 40px;
        flex: 1 1 auto;
        width: 50%;
      }

      & nav:nth-of-type(3) {
        margin-bottom: 40px;
        flex: 1 1 auto;
        width: 50%;
      }

      .addressContainer {
        margin-bottom: 40px;
        flex: 1 1 auto;
      }
    }

  }

  & .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #000000;
    color: #ffffff;

    span {
      width: 100%;
      font-size: 14px;
      padding: 25px 25px;
      text-align: center;

      
    }
  }
`