import styled from "styled-components"
import { glassIconAnimation, glassInAnimation, textAnimation } from './animations'

interface GlassLinkProps {
  delay: number;
}

export const Container = styled.div`
  & .buttonContainer {
    margin-bottom: 50px;
    animation: ${textAnimation} 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;

    button {
      font-size: 32px;
      text-transform: uppercase;
      font-family: "Monument";
      color: #ffffff;
      background: none;
      border: none;
      cursor: pointer;  
      
      &:hover {
        opacity: 0.5;
      }
    }  
  }

  & .glassesContainer {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 50px;

    button {
      background: none;
      border: none;
      font-family: "Monument";
      font-size: 32px;
      color: #ffffff;
      text-transform: uppercase;
      animation: ${textAnimation} 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;

      & :hover {
        opacity: 0.5;
      }
    }

    nav {
      width: 100%;
    }

    ul {
      display: flex;
      justify-content: space-space-around;
      flex-wrap: wrap;
      width: 80%;
    }  

    img {
      max-width: 150px;
      height: 60px;
    }
  }

  @media screen and (max-width: 720px) {
    padding: 0px 15px 20vh;
    margin-bottom: 30px;

    & .buttonContainer {
      a {
        font-size: 24px;
      }

      button {
        font-size: 24px;
      }
    }

    & .glassesContainer {
      button {
        font-size: 24px;
      }
      
      ul {
        width: 100%;
      }

      img {
        max-width: 100px;
        height: 40px;
      }
    }
  }
`

export const GlassLink = styled.li<GlassLinkProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-basis: 20%;
  margin: 30px 20px 0px 0px;
  cursor: pointer;
  animation: ${glassInAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.${props => props.delay}s both;
  -webkit-animation: ${glassInAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.${props => props.delay}s both;

  &:hover img {
    -webkit-animation: 0.9s ease 0s 1 normal both running ${glassIconAnimation};
    animation: 0.9s ease 0s 1 normal both running ${glassIconAnimation};
  }

  &:hover span {
    color: #000000;
          
    &::before {
      width: 100%;
    }
  }

  span {
    display: block;
    width: 150px;
    margin-top: 20px;
    color: var(--gray-200);
    font-size: 14px;
    text-align: center;
    position: relative;
    z-index: 5;

    &::before {
      position: absolute;
      content: "";
      top: 0px;
      left: 0px;
      background: #ffffff;
      width: 0%;
      height: 20px;
      transition: all 0.2s linear 0s;
      z-index: -1;
    }  
  }

  @media screen and (max-width: 720px) {
    span {
      width: 100px;
    }
  }
`