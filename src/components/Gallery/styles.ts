import styled from "styled-components";

export const Container = styled.section`
  background-color: #ffffff;
`

export const Section = styled.div`
  background-image: linear-gradient(82deg, #fe4c64 3%, #b72dc3 49%, #641fb9 97%);
  padding: 90px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 1;

  &::before {
    content: "";
    transition: all 0.3s linear 0s;
    background-image: linear-gradient(50deg, #641fb9 3%, #b72dc3 49%, #fe4c64 97%);
    opacity: 0;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 0%;
    height: 100%;
  }

  &:hover::before {
    opacity: 1;
    width: 150%;
  } 

  &:hover {
    h3 {
      background-image: linear-gradient(50deg, #641fb9 3%, #b72dc3 49%, #fe4c64 97%);
    }
  }

  h3 {
    transition: all 0.3s linear 0s;
    margin-bottom: 20px;
    font-family: "Monument";
    font-size: 42px;
    color: #ffffff;
    opacity: 1;
    z-index: 2;
    background: transparent;
  }

  p {
    margin: 0 20px;
    max-width: 460px;
    width: 100%;
    color: #ffffff;
    font-size: 24px;
    text-align: center;
    line-height: 36px;
    opacity: 1;
    z-index: 2;
  }
`

