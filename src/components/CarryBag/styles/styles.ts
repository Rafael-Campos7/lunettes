import styled from "styled-components";
import { fadeIn, buttonIconMove } from './animations'

export const Container = styled.div`
  -webkit-animation: ${fadeIn} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.1s both;
	animation: ${fadeIn} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.1s both;

  h2 {
    margin-bottom: 25px;
    font-family: 'Monument', sans-serif;
    text-transform: uppercase;
    font-size: 32px;
    color: #ffffff;

    @media screen and (max-width: 720px) {
      margin-bottom: 0px;
      font-size: 24px;
    }
  }
`

export const BagHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px;
  align-items: center;
  width: 90%;
  border-bottom: 1px solid var(--gray-200);
  
  h3 {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;

    h3 {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 4fr 1fr;

    & h3:nth-child(2) {
      display: none;
    }
  }
`

export const Total = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 80px;
  align-items: center;
  width: 90%;
  border-top: 1px solid var(--gray-200);
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: 16px;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 4fr 1fr;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 60px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    transition: 0.3s;

    svg {
      margin-right: 20px;
      font-size: 25px;
    }

    &:hover svg {
      -webkit-animation: ${buttonIconMove} 0.8s both;
	    animation: ${buttonIconMove} 0.8s both;
    }

    @media screen and (max-width: 720px) {
      width: 270px;
      height: 50px;
      font-size: 14px;
    }
  }

  & .continueButton {
    margin-right: 15px;
    background: #ffffff;

    &:hover {
      opacity: 0.5;
    }
  }

  & .finishButton {
    color: #ffffff;
    background: #25d366;

    &:hover {
      background: #00ba44;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    
    button {
      padding: 10px 15px;
    }

    & .continueButton {
      margin: 0px 0px 10px 0px;
    }
  }
`